import Telegraf from 'telegraf';
const api = '592709609:AAEaPvzFgijM0wWpwQaChzZs5AfhbnHi7jg';

const bot = new Telegraf(api)
console.log('bot is start now')
bot.command('/test', (ctx) => ctx.replyWithMarkdown('*Hello*'));
bot.startPolling();
