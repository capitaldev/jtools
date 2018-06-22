import fs from 'fs';
import { getCoins, getTokens } from './common';

export default function buildMessages() {
  const wallets = fs.readFileSync('../getAdress/wallet_demo.csv', 'utf8');
  const walletsArr = wallets.split('\r\n');
  
  const coins = getCoins(walletsArr, 864000);
  const tokens = getTokens(walletsArr, 86400);

  fs.writeFileSync('./store/coins.txt', coins);
  console.log('coins.txt was saved!');
  fs.writeFileSync('./store/tokens.txt', tokens);
  console.log('tokens.txt was saved!');
}

// fs.writeFile('./store/coins.txt', coins, function (err) {
//   if (err) throw err;
//   console.log('coins.txt was saved!');
// });
// fs.writeFile('./store/tokens.txt', tokens, function (err) {
//   if (err) throw err;
//   console.log('tokens.txt was saved!');
// });
// get recent txns (no olders than 10 days)
// const newTxns = common.getNewTxns(txns, 864000);
// const tokenTxns = common.combineTxns(txns);
// const obj = common.listTxns(tokenTxns);
// fs.writeFile('Txns2.json', JSON.stringify({ result: obj }), function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

