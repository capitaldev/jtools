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

const addDecimal = (value, decimal) => {
  return value.substr(0, value.length - decimal) + '.' + value.substr(value.length - decimal, value.length)
}

const getNewTxns = (data, time) => {
  const now = Date.now() / 1000;
  const result = data.filter(item => {
    let timeAgo = now - item.timeStamp;
    return timeAgo <= time;
  })
  return result;
}

const addType = (txns, address) => {
  for (let i = 0; i < txns.length; i++) {
    if (txns[i].from === address) {
      txns[i].type = 'out';
    } else {
      txns[i].type = 'in';
    }
  }
  return txns;
}

const combineTxns = (txns) => {
  let groups = {};
  for (let i = 0; i < txns.length; i++) {
    // let groupName = txns[i].contractAddress;
    let { contractAddress, tokenName, tokenSymbol, tokenDecimal } = txns[i];
    let groupName = `${contractAddress}&&${tokenName}&&${tokenSymbol}`

    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    if (txns[i].type === 'out') {
      txns[i].value = `-${txns[i].value}`
    }
    groups[groupName].push(addDecimal(txns[i].value, txns[i].tokenDecimal));
  }
  let result = [];
  for (let groupName in groups) {
    const keys = groupName.split('&&');
    result.push({
      contractAddress: keys[0],
      tokenName: keys[1],
      tokenSymbol: keys[2],
      tnxValues: groups[groupName],
    });
  }
  return result
}

const getTokenTxn = (tokenTxns) => {
  let result = {};
  for (let item of tokenTxns) {
    let title = item.contractAddress;
    let value = item.tnxValues.reduce((a, b) => { return parseFloat(a) + parseFloat(b) }, 0)
    if (item.tokenSymbol !== '') {
      title = `${item.tokenSymbol} (${item.tokenName}): `
    }
    result[title] = value;
  }
  return result;
}

export {
  requestAPI,
  getNewTxns,
  combineTxns,
  addType,
  getTokenTxn
}