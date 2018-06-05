const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');
const wallet_url = '../getAdress/wallet_demo.csv'

const wallets = fs.readFileSync(wallet_url, 'utf8')
const arrays = wallets.split('\r\n');
console.log(arrays);



for (let adress of arrays) {
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${adress}&tag=latest&apikey=`
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  const response = xhttp.responseText;
  console.log('response===', response);
}


