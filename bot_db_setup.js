const util = require('util');
const exec = util.promisify(require('child_process').exec);
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname+'/bot.db');

async function build_db(){
      try {
        await db.exec("CREATE TABLE IF NOT EXISTS node_header (chat_id VARCHAR NOT NULL, node_id VARCHAR NOT NULL)");
        await db.exec("CREATE TABLE IF NOT EXISTS user_header (chat_id VARCHAR PRIMARY KEY NOT NULL, user_name VARCHAR, tip_address VARCHAR, tip_address_key VARCHAR, last_tip_sent_date DATE, last_profile_req_date DATE)");
        await db.exec("CREATE TABLE IF NOT EXISTS command_history (command VARCHAR PRIMARY KEY NOT NULL, date_last_used DATE)");
        await db.close();

      } catch (e) {
        console.log(e)
        console.log('Database - BLAHRG')
      }
    }
  build_db()
