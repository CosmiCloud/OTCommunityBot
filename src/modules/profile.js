require('dotenv').config();
const fs = require("fs");
const queryTypes = require("../util/queryTypes");
const queryAPI = require("../util/queryAPI");
const rpc_endpoint = process.env.TIPPING_ENDPOINT
const Web3 = require('web3');
const web3 =  new Web3(Web3.givenProvider || new Web3.providers.HttpProvider(rpc_endpoint));

module.exports = profile = async (type, ctx) => {
  const queryOTHUB = queryTypes.queryOTHUB();
  const querySQL = queryTypes.querySQL();
    //console.log(ctx.message.from.id)
    command = ' ' //profile check -- no cooldown
    query = `SELECT chat_id, user_name, tip_address FROM user_header WHERE chat_id =${ctx.message.from.id}`
    user_info = await querySQL
    .getData(query, command)
    .then(async ({query_result, permission}) => {
      console.log(query_result)
      return query_result;
    })
    .catch((error) => console.log(`Error : ${error}`));

    if(user_info[0]){ //if profile exists
  		if(type == `profile`){
  		  console.log('you have a profile');
        query = `SELECT uh.chat_id, uh.user_name, uh.tip_address, nh.node_id FROM user_header uh INNER JOIN node_header nh ON nh.chat_id = uh.chat_id WHERE uh.chat_id ="${ctx.message.from.id}" LIMIT 50`
        profile_data = await querySQL
        .getData(query, command)
        .then(async ({query_result, permission}) => {
          return query_result;
        })
        .catch((error) => console.log(`Error : ${error}`));

        total_jobs = 0
        active_jobs = 0
        staked_tokens = 0
        locked_tokens = 0
        paidout_tokens = 0
        total_litigations = 0

        if(profile_data[0]){
    		  for(var i = 0; i < (profile_data.length); i++) {
      			node_id = profile_data[i].node_id
      			ext = `nodes/DataHolder/${node_id}`
      			dh_info = await queryOTHUB
      			.getData(ext)
      			.then(async ({ result }) => {
      			  return result.data;
      			})
      			.catch((error) => console.log(`Error : ${error}`));
            console.log(dh_info)

      			total_jobs = total_jobs + parseInt(dh_info.TotalWonOffers);
      			active_jobs = active_jobs + parseInt(dh_info.TotalActiveOffers);
      			staked_tokens = staked_tokens + parseInt(dh_info.StakeTokens);
      			locked_tokens =  locked_tokens + parseInt(dh_info.StakeReservedTokens);
      			paidout_tokens =  paidout_tokens + parseInt(dh_info.PaidTokens);
      			total_litigations = total_litigations + parseInt(dh_info.LitigationCount);
    		  }

    		  return `
    			@${ctx.message.from.username}
          *Tipping Address:* ${profile_data[0].tip_address}
    			*Node Count:* ${profile_data.length}
    			*Total Jobs:* ${total_jobs}
    			*Active Jobs:* ${active_jobs}
    			*Staked Tokens:* ${staked_tokens}
    			*Locked Tokens:* ${locked_tokens}
    			*Paidout Tokens:* ${paidout_tokens}
    			*Total Litigations:* ${total_litigations}
    		  `
        }else{
          return `
    			@${ctx.message.from.username}
          *Tipping Address:* ${user_info[0].tip_address}
    			*Node Count:* ${profile_data.length}
    			*Total Jobs:* ${total_jobs}
    			*Active Jobs:* ${active_jobs}
    			*Staked Tokens:* ${staked_tokens}
    			*Locked Tokens:* ${locked_tokens}
    			*Paidout Tokens:* ${paidout_tokens}
    			*Total Litigations:* ${total_litigations}
          `
        }
  	  }else if(type == `delete`){
    		if(ctx.message.chat.type == 'private'){
    		  command = ' ' //profile check -- no cooldown
    		  query = `DELETE FROM user_header WHERE chat_id =${ctx.message.from.id}`
    		  await querySQL
    		  .getData(query, command)
    		  .then(async ({query_result, permission}) => {
    			//
    		  })
    		  .catch((error) => console.log(`Error : ${error}`));

    		  command = ' ' //profile check -- no cooldown
    		  query = `DELETE FROM node_header WHERE chat_id =${ctx.message.from.id}`
    		  await querySQL
    		  .getData(query, command)
    		  .then(async ({query_result, permission}) => {
    			//
    		  })
    		  .catch((error) => console.log(`Error : ${error}`));

    		  return `@${ctx.message.from.username}, I have deleted your profile`
    		}
  	  }else if(type == `nodeids`){
    		if(ctx.message.chat.type == 'private'){
          command = ' ' //profile check -- no cooldown
          query = `SELECT node_id FROM node_header WHERE chat_id ='${ctx.message.from.id}'`
          node_ids = await querySQL
          .getData(query, command)
          .then(async ({query_result, permission}) => {
            return query_result;
          })
          .catch((error) => console.log(node_list));
          console.log(node_ids)
          if(node_ids){
            node_list = ""
      		  for(var i = 0; i < (node_ids.length); i++) {
        			var node_id = node_ids[i].node_id
        			var node_list = node_list+node_ids[i].node_id+' '
        			console.log(node_list)
      		  }
      		  return `
      		  @${ctx.message.from.username}, I have the following nodes on record for your profile
      		  ${node_list}
      		  `
          }else{
            return `@${ctx.message.from.username}, I dont have any nodes on record for you Please add some with addnodeid`
          }
    		}else{
          return `@${ctx.message.from.username}, I can only show node ids in private`
        }
  	  }else if(type == `add`){
    		if(ctx.message.chat.type == 'private'){
          messy = ctx.message.text
          node_id = messy.replace('/addnodeid', '')
          node_id =  node_id.substring(1);

          if (node_id == ''){//no params rovided
            return `You need to specificy a node id`;
          }else{
            console.log(node_id);
            ext = `nodes/DataHolder/${node_id}`
            dh_info = await queryOTHUB
            .getData(ext)
            .then(async ({ result }) => {
              return result;
             })
             .catch((error) => console.log(`Error : ${error}`));
             console.log(dh_info.data)
            if(dh_info.data != ''){

              command = ' '
              query = `INSERT INTO node_header VALUES ('${ctx.message.from.id}','${node_id}')`
              await querySQL
              .getData(query, command)
              .then(async ({query_result, permission}) => {
                //
              })
              .catch((error) => console.log(`Error : ${error}`));

              command = ' '
              query = `SELECT chat_id, node_id FROM node_header WHERE chat_id ='${ctx.message.from.id}'`
              node_id_list = await querySQL
              .getData(query, command)
              .then(async ({query_result, permission}) => {
                return query_result;
              })
              .catch((error) => console.log(`Error : ${error}`));

              return `@${ctx.message.from.username}, I have added node ${node_id} to your profile You can run myprofile to get your stats`

            }else{
              return `@${ctx.message.from.username}, that is not a valid node id`
            }
          }
    		}else{
          return `@${ctx.message.from.username}, I can only add node ids in private`
        }
  	  }else if(type == `create`){
    		if(ctx.message.chat.type == 'private'){
    		  return `@${ctx.message.from.username}, You already have a profile`
    		}else{
          return `@${ctx.message.from.username}, You already have a profile`
        }
  	  }
  	}else{//no profile data
      if(type == 'create'){
        if(ctx.message.chat.type == 'private'){
          const account = await web3.eth.accounts.create();
          console.log(account);
          command = ' ' //create_profile in db
          query = `INSERT INTO user_header VALUES ('${ctx.message.from.id}','${ctx.message.from.username}','${account.address}','${account.privateKey}','${account.signTransaction}','${account.sign}','1')`
          await querySQL
          .getData(query, command)
          .then(async ({query_result, permission}) => {
               return query_result;
          })
          .catch((error) => console.log(error));

          query = `SELECT chat_id, user_name, tip_address, tip_address_key FROM user_header WHERE chat_id =${ctx.message.from.id}`
          user_info = await querySQL
          .getData(query, command)
          .then(async ({query_result, permission}) => {
            return query_result;
          })
          .catch((error) => console.log(error));
          return `@${ctx.message.from.username},
          I have created a profile for ${user_info[0].user_name}  ${user_info[0].chat_id}
          Your tipping address is: ${user_info[0].tip_address}
          Your tipping address private key is: ${user_info[0].tip_address_key}  YOU ARE RESPONSIBLE FOR SAVING THIS
          You can add nodes to your profile with /addnodeid
          `

    		}else{
    		  return `@${ctx.message.from.username}, I only like to do profile creation stuff in private  DM me to create a profile and add node ids`
    		}
      }else{
        return `@${ctx.message.from.username}, Please create a profile by DMing me /createprofile`
      }
    }
};
