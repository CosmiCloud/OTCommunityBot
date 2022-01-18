require('dotenv').config();
const fs = require("fs");
const queryTypes = require("../util/queryTypes");
const queryAPI = require("../util/queryAPI");
const rpc_endpoint = process.env.TIPPING_ENDPOINT
const Tx = require('ethereumjs-tx').Transaction;
const Common = require('ethereumjs-common').default;
const Web3 = require('web3');
const web3 =  new Web3(Web3.givenProvider || new Web3.providers.HttpProvider(rpc_endpoint));
const contract_addr = process.env.TIPPING_CONTRACT_ADDR
//const customChainParams = { name: 'polygon-mumbai', chainId: 80001, networkId: 80001 }
//const common = new Common.forCustomChain('mainnet',{name: 'PolygonMainnet',chainId: 137, networkId: 137 }, 'petersburg');
const minABI = require("../abi/abi");

module.exports = tip = async (ctx) => {
  const queryOTHUB = queryTypes.queryOTHUB();
  const querySQL = queryTypes.querySQL();

  spam_check = `SELECT last_tip_date FROM user_header WHERE chat_id = ${ctx.message.from.id}`
  const spam_result = await queryDB(spam_check); //query results for checkspam

  console.log(spam_result)
  expireDate = new Date(spam_result[0].last_tip_date);
  currentDate = new Date();

  timeDif = Math.abs(currentDate - expireDate);
  expireDate = Math.abs(expireDate);
  //cooldown = 3*60*1000
  cooldown = 1

  console.log(timeDif)
  console.log(expireDate)

  if(timeDif > cooldown){
    permission = `allow`
    //insert a new time stamp
    time_stamp = new Date();
    time_stamp = Math.abs(time_stamp);
    insert_timestamp = `UPDATE user_header SET last_tip_date = ${time_stamp}`
    await queryDB(insert_timestamp);

  }else{
    permission = `block`
    remaining = cooldown - timeDif
    console.log(`Command: tips was blocked. Time remaining: ${remaining} milliseconds.`)
    query_result = `Command was blocked.`
  }

  if(permission == `allow`){
    messy = ctx.message.text
    messy = messy.replace('/tip', '')

    if (messy == ''){//no params rovided
      return `@${ctx.message.from.username}, you must provide a tip amount (1 trac max) and a recipient`;
    }else{
      custom = 'yes'
      messy = messy.trim();

      amount = messy.substr(0,messy.indexOf(' '));
      console.log(`AMOUNT: ${amount}`)
      if(amount > 1){
        return `@${ctx.message.from.username}, you must provide a valid number less than or equal 1`;
      }

      reciever_name = messy.substr(messy.indexOf(' ')+2);
      reciever_name = reciever_name.trim();
      console.log(`RECEIVER NAME: ${reciever_name}`)
      if(reciever_name){
        command = ' ' //profile check -- no cooldown
        query = `SELECT chat_id, user_name, tip_address FROM user_header WHERE user_name ='${reciever_name}'`
        reciever_info = await querySQL
        .getData(query, command)
        .then(async ({query_result, permission}) => {
          return query_result;
        })
        .catch((error) => console.log(`Error : ${error}`));

        console.log(reciever_info);
        if(reciever_info){
          //
        }else{
          return `@${ctx.message.from.username}, the recipient does not have a profile created`;
        }
      }else{
        return `@${ctx.message.from.username}, you must provide a recipient`;
      }
    }

    command = ' ' //profile check -- no cooldown
    query = `SELECT chat_id, user_name, tip_address, tip_address_key, last_tip_date FROM user_header WHERE chat_id =${ctx.message.from.id}`
    sender_info = await querySQL
    .getData(query, command)
    .then(async ({query_result, permission}) => {
      return query_result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    if(reciever_info[0] && sender_info[0]){
      let tokenAddress = contract_addr;
      let senderAddress = sender_info[0].tip_address;
      let recieverAddress = reciever_info[0].tip_address;

      contract = new web3.eth.Contract(minABI,tokenAddress, {from: senderAddress});
      sender_trac_balance = await contract.methods.balanceOf(senderAddress).call();

      if (sender_trac_balance.length < 18){
        dif = 18 - sender_trac_balance.length

        zeros = ""
        for (i = 0; i < dif; i++) {
          zeros = zeros + "0"
        }

        sender_trac_balance = zeros + sender_trac_balance
        sender_trac_balance = "."+ sender_trac_balance
        sender_trac_balance = Number(sender_trac_balance);

      }else if(sender_trac_balance.length == 18){
        sender_trac_balance = "."+ sender_trac_balance
        sender_trac_balance = Number(sender_trac_balance);

      }else{
          eth_decimals = sender_trac_balance.slice(-18, 18);
          dif = sender_trac_balance.length - 18
          dif = Number(dif);
          eth_whole = sender_trac_balance.slice(0, dif);
          eth_decimals = "." +eth_decimals
          sender_trac_balance = eth_whole + eth_decimals
          sender_trac_balance = Number(sender_trac_balance);
      }

      gas_balance = await web3.eth.getBalance(senderAddress);
      if (gas_balance.length < 18){
        dif = 18 - gas_balance.length

        zeros = ""
        for (i = 0; i < dif; i++) {
          zeros = zeros + "0"
        }

        gas_balance = zeros + gas_balance
        gas_balance = "."+ gas_balance
        gas_balance = Number(gas_balance);

      }else if(gas_balance.length == 18){
        gas_balance = "."+ gas_balance
        gas_balance = Number(gas_balance);

      }else{
          eth_decimals = gas_balance.slice(-18, 18);
          dif = gas_balance.length - 18
          dif = Number(dif);
          eth_whole = gas_balance.slice(0, dif);
          eth_decimals = "." +eth_decimals
          gas_balance = eth_whole + eth_decimals
          gas_balance = Number(gas_balance);
      }

      console.log(`SENDER GAS: ${gas_balance}`)
      console.log(`SENDER TRAC BALANCE: ${sender_trac_balance}`)
      limit = Number(.001)
      if(sender_trac_balance > amount){
        if(gas_balance < limit){
          return '@'+sender_info[0].user_name+', You do not have enough to pay for gas: '+gas_balance+' You must have at least .001';
        }
      }else{
        return `@${sender_info[0].user_name}, Your TRAC balance ${sender_trac_balance} is too low to send ${amounty}`;
      }

      //get nonce
      nonce = web3.eth.getTransactionCount(senderAddress);
      nonce = nonce +1
      //set amount
      amount = web3.utils.toWei(amount.toString(), 'ether')
      amount = web3.utils.toBN(amount)
      console.log(`BN: `+amount)

      //privateKey
      privateKey = sender_info[0].tip_address_key;
      //privateKey = privateKey.replace('0x', '')
      privateKey = Buffer.from(privateKey, 'hex')

      console.log(`SENDER: ${senderAddress}`)
      console.log(`RECIEVER: ${recieverAddress}`)

      const rawTransaction = {
        "from":senderAddress,
        "gasPrice":web3.utils.toHex(2 * 1e9),
        "gasLimit":web3.utils.toHex(50000),
        "to":contract_addr,
        "value":amount,
        "type": web3.utils.toHex(0),
        "data":contract.methods.transfer(recieverAddress, amount).encodeABI(),
        "nonce":nonce
      }
      console.log(`here`)
      //transaction = new Tx(rawTransaction, {common : common}) //, {common : common}=
      transaction = new Tx(rawTransaction, {chainId: 137})
      console.log(`here1`)
      await transaction.sign(privateKey);
      serializedtxn = await transaction.serialize();
      console.log(serializedtxn)
      await web3.eth.sendSignedTransaction('0x' +serializedtxn.toString('hex'));

      return `@${sender_info[0].user_name}, Sent a tip to ${reciever_info[0].user_name} transaction has is: `;//${receipt.transactionHash}`;
    }else{
      return `@${user_info[0].user_name}, You or @${reciever_name} does not have a profile created yet`;
    }
  }else{
    return ``
  }
};
