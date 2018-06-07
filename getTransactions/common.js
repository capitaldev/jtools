const cp = (obj) => {
  let res = {}
  for (let key in obj) {
    res[key] = `&${key}=${obj[key]}`
  }
  return res
};

export const getTokensTranfer = (address, apikey, obj) => {
  const params = cp(obj)
  const baseUrl = 'http://api.etherscan.io/api?module=account';
  const {
    action,
    startblock,
    endblock,
    page,
    offset,
    sort,
  } = params
  address = '&address=' + address;
  apikey = '&apikey=' + apikey;
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