import fs from 'fs';
import bot from './bot';
import { getCoins, getTokens } from './common';

export default function buildMessages(time) {
  const wallets = fs.readFileSync('../getAdress/wallet_demo.csv', 'utf8');
  const walletsArr = wallets.split('\r\n');

  const coins = getCoins(walletsArr, 864000);
  fs.writeFile('./store/coins.txt', coins, function (err) {
    if (err) throw err;
    console.log('coins.txt was saved!');
  });

  const tokens = getTokens(walletsArr, 86400);
  fs.writeFile('./store/tokens.txt', tokens, function (err) {
    if (err) throw err;
    console.log('tokens.txt was saved!');
  });
  setTimeout(buildMessages(time), time);
}

// get recent txns (no olders than 10 days)
// const newTxns = common.getNewTxns(txns, 864000);
// const tokenTxns = common.combineTxns(txns);
// const obj = common.listTxns(tokenTxns);
// fs.writeFile('Txns2.json', JSON.stringify({ result: obj }), function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

