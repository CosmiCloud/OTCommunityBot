const getOTHUB = require("../queries/queryOTHUB");
const getSQL = require("../queries/querySQL");

const queryTypes = [
  {
    name: "sqlite",
    getData: () => getSQL(query, command)
  },
  {
    name: "othub",
    getData: () => getOTHUB(ext)
  }
];

module.exports = {
  querySQL: function querySQL() {
    return queryTypes[0];
  },
  queryOTHUB: function queryOTHUB() {
    return queryTypes[1];
  }
};
