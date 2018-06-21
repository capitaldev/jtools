import bot from './bot';

console.log('Bot is running Now!');

bot.catch((err) => { console.log('Ooops', err) })
bot.startPolling();
