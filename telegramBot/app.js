const Telegraf = require('telegraf')
const api = '592709609:AAEaPvzFgijM0wWpwQaChzZs5AfhbnHi7jg';

const bot = new Telegraf(api)
bot.command('/test1', (ctx) => ctx.reply('Hello'))
bot.startPolling()
