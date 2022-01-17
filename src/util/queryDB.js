const sqlite3 = require('sqlite3');
const Database = require('sqlite-async');
const dba = new Database;

module.exports = queryDB = async (query) => {
  console.log(`Running Query: ${query}`)
  await dba.open(`${__dirname}/../../database/bot.db`);
  result = await dba
   .all(query)
   .then((row) => {
     return row;
    })
   .catch((error) => console.log(`Error : ${error}`));

  await dba
    .close()
    .then(() => console.log('Closing database connection.'))
    .catch((err) => console.log(err.message));

  return result;
};
