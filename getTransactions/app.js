import bot from './src/bot';
import buildMessages from './src/buildMessages';
import { setTimeout } from 'core-js/library/web/timers';


// setTimeout(buildMessages(60000), 60000);

console.log('Bot is running Now!');

bot.catch((err) => { console.log('Ooops', err) })
bot.startPolling();


// import fs from 'fs';
// import bot from './src/bot';
// import { getCoins, getTokens } from './src/common';

// const wallets = fs.readFileSync('../getAdress/wallet_demo.csv', 'utf8');
// const walletsArr = wallets.split('\r\n');

// const coins = getCoins(walletsArr, 864000);
// fs.writeFile('./messages/coin.json', coins, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// const tokens = getTokens(walletsArr, 86400);
// fs.writeFile('./messages/tokens.txt', tokens, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });