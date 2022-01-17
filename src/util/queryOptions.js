exports.getOTHUB = (ext) => ({
  path: `https://v5api.othub.info/api/${ext}`,
  config: {}
});

exports.getSQL = (query) => ({
  query: `${query}`
});
