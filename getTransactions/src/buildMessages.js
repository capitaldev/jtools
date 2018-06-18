import * as common from "./common";
import fs from 'fs';
import { XMLHttpRequest } from 'xmlhttprequest';

const wallet_url = '../getAdress/wallet_demo.csv'
const wallets = fs.readFileSync(wallet_url, 'utf8')
const walletsArr = wallets.split('\r\n');

function getTxns(walletsArr) {
  console.log('Getting transactions...');

  const params = {
    // startblock: 1,
    // endblock: 10,
    apikey: '',
    action: 'tokentx',
    page: 1,
    offset: 10,
    sort: 'desc'
  }
  let txns = [];
  for (let address of walletsArr) {
    params.address = address;
    const url = common.requestAPI(params);
    const xhttp = new XMLHttpRequest();
    console.log('Sending request...', address);
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    let { result } = JSON.parse(xhttp.responseText);
    if (result) {
      txns = txns.concat(result);
      txns = common.addType(txns, address);
    }
  }
  return txns;
}


export default getTxns;

// get recent txns (no olders than 10 days)
// const newTxns = common.getNewTxns(txns, 864000);
// const tokenTxns = common.combineTxns(txns);
// const obj = common.getTokenTxn(tokenTxns);
// fs.writeFile('Txns2.json', JSON.stringify({ result: obj }), function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

