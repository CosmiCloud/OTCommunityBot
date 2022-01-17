const fs = require("fs");
const queryAPI = require("../util/queryAPI");
const { getOTHUB } = require("../util/queryOptions");

module.exports = queryOTHUB = async (ext) => {
  let queryOptions = getOTHUB(ext);
  result = await queryAPI(queryOptions);

  return {
    result: result
  };
};
