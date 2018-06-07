import { getTokensTranfer } from "./common";
// const getTokensTranfer = require("./common");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');
const wallet_url = '../getAdress/wallet_demo.csv'

const wallets = fs.readFileSync(wallet_url, 'utf8')
const walletsArr = wallets.split('\r\n');
console.log('start...', walletsArr);

// console.log('getTokensTranfer===', getTokensTranfer);
const params = {
  // startblock: 1,
  // endblock: 10,
  action: 'tokentx',
  page: 1,
  offset: 10,
  sort: 'desc'
}

let data = {};
let txts = [];
let content = ''

for (let address of walletsArr) {
  // const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=`
  const url = getTokensTranfer(address, '', params)
  const xhttp = new XMLHttpRequest();
  console.log('Sending request...')
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  txts.push(xhttp.responseText.result);
  // console.log(JSON.parse(xhttp.responseText).result);
  data[address] = JSON.parse(xhttp.responseText).result;
  // content = xhttp.responseText;
}

console.log(data);
// var dateString = moment.unix(value).format("MM/DD/YYYY");

// fs.writeFile('Txts.json', content, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

