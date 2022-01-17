const fs = require("fs");
const queryDB = require("../util/queryDB");
const { getSQL } = require("../util/queryOptions");
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(`${__dirname}/../../database/bot.db`);

module.exports = querySQL = async (query, command) => {
  if(command != ' '){
    //check for spam
    spam_check = `SELECT date_last_used FROM command_history WHERE command = "${command}"`
    const spam_result = await queryDB(spam_check); //query results for checkspam

    expireDate = new Date(spam_result[0].date_last_used);
    currentDate = new Date();

    timeDif = Math.abs(currentDate - expireDate);
    expireDate = Math.abs(expireDate);
    cooldown = 3*60*1000

    if(timeDif > cooldown){
      permission = `allow`
      console.log(`Command: ${command} is allowed`)
      queryOptions = await  getSQL(query);

      if(query != ' '){
        queryOptions = await  getSQL(query);
        query_result = await queryDB(queryOptions.query);
      }else{
        query_result = `No query was supplied.`
      }

      //insert a new time stamp
      time_stamp = new Date();
      insert_timestamp = `REPLACE INTO command_history VALUES ('${command}','${time_stamp}')`
      await queryDB(insert_timestamp);

    }else{
      permission = `block`
      remaining = cooldown - timeDif
      console.log(`Command: ${command} was blocked. Time remaining: ${remaining} milliseconds.`)
      query_result = `Command was blocked.`
    }
  }else{
    if(query != ' '){
      queryOptions = await  getSQL(query);
      query_result = await queryDB(queryOptions.query);
      permission = `Permissionless request.`
    }else{
      query_result = `No query was supplied.`
      permission = `Permissionless request.`
    }
  }


  return {
    query_result: query_result,
    permission: permission
  };
};
