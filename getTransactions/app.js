import * as common from "./src/common";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');
const wallet_url = '../getAdress/wallet_demo.csv'

const wallets = fs.readFileSync(wallet_url, 'utf8')
const walletsArr = wallets.split('\r\n');
console.log('start...', walletsArr);

const params = {
  // startblock: 1,
  // endblock: 10,
  apikey: '',
  action: 'tokentx',
  page: 1,
  offset: 10,
  sort: 'desc'
}

// let data = {};
let txts = [];
let content = ''

for (let address of walletsArr) {
  params.address = address;
  const url = common.requestAPI(params)
  const xhttp = new XMLHttpRequest();
  console.log('Sending request...')
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  let { result } = JSON.parse(xhttp.responseText)
  txts = txts.concat(result);
}

// const newtxts = common.getNewTxts(txts, 864000);

// fs.writeFile('Txts2.json', JSON.stringify({ result: newtxts }), function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

const contracttxt = common.combineTxts(txts);

fs.writeFile('Txts3.json', JSON.stringify({ result: contracttxt }), function (err) {
  if (err) throw err;
  console.log('Saved!');
});