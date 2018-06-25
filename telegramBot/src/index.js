require('dotenv').config()
const Telegraf = require('telegraf');

const coins = require(process.env.JTOOL_PATH + '/getTransactions/store/coins.txt');
const tokens = require(process.env.JTOOL_PATH + '/getTransactions/store/tokens.txt');
const TELEGRAM_KEY = '592709609:AAEaPvzFgijM0wWpwQaChzZs5AfhbnHi7jg'
const bot = new Telegraf(TELEGRAM_KEY)

const listCoins = (ctx) => {
  ctx.replyWithMarkdown('*request coins in 10 days!*\n', coins);
}

const listTokens = (ctx) => {
  ctx.replyWithMarkdown('*request tokens in 10 days!*\n', tokens);
}

bot.command('/listCoins', listCoins);
bot.command('/listTokens', listTokens);
bot.command('/hi,', (ctx) => ctx.replyWithMarkdown('*Hi there* :)'));

bot.startPolling();
