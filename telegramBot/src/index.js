require('dotenv').config()
import Telegraf from 'telegraf';
import { TELEGRAM_KEY } from process.env.JTOOL_PATH + '/getTransactions/src/const';
import coins from process.env.JTOOL_PATH + '/getTransactions/store/coins.txt';
import tokens from process.env.JTOOL_PATH +'/getTransactions/store/tokens.txt';

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
