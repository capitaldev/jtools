import { getTokensTranfer } from "./common";
// const getTokensTranfer = require("./common");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');
const wallet_url = '../getAdress/wallet_demo.csv'

const wallets = fs.readFileSync(wallet_url, 'utf8')
const arrays = wallets.split('\r\n');
console.log('start...', arrays);

console.log('getTokensTranfer===', getTokensTranfer);
// const params = {
//   // startblock: 1,
//   // endblock: 10,
//   action: 'tokentx',
//   page: 1,
//   offset: 10,
//   sort: 'desc'
// }

for (let adress of arrays) {
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${adress}&tag=latest&apikey=`
  // const url = getTokensTranfer(adress, '', params)
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  const response = xhttp.responseText;
  console.log('response===', response);
}


