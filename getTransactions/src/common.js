const paramsTranslation = (obj) => {
  let res = {}
  for (let key in obj) {
    res[key] = `&${key}=${obj[key]}`
  }
  return res
};

const requestAPI = (obj, http = 'http') => {
  const params = paramsTranslation(obj)
  const baseUrl = `${http}://api.etherscan.io/api?module=account`;
  const {
    address,
    apikey,
    action,
    startblock,
    endblock,
    page,
    offset,
    sort,
  } = params
  // address = '&address=' + address;
  // apikey = '&apikey=' + apikey;
  let result;
  if (startblock) {
    // Returns up to a maximum of the last 10000 transactions only
    result = baseUrl + action + address + startblock + endblock + sort + apikey;
  } else {
    // To get paginated results use page=<page number> and offset=<max records to return
    result = baseUrl + action + address + page + offset + sort + apikey;
  }
  return result;
}

const getNewTxts = (data, time) => {
  const now = Date.now() / 1000;
  const result = data.filter(item => {
    let timeAgo = now - item.timeStamp;
    return timeAgo <= time;
  })
  return result;
}

const combineTxts = (array) => {
  let groups = {};
  for (let i = 0; i < array.length; i++) {
    let contractAddress = array[i].group;
    if (!groups[contractAddress]) {
      groups[contractAddress] = [];
    }
    groups[contractAddress].push(array[i].color);
  }
  let result = [];
  for (let contractAddress in groups) {
    result.push({ group: contractAddress, color: groups[contractAddress] });
  }
  return result
}

export {
  requestAPI,
  getNewTxts,
  combineTxts
}