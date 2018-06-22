import buildMessages from './src/buildMessages';
import { setTimeout } from 'core-js/library/web/timers';

console.log('Start!!!')
buildMessages();
setInterval(() => {
  console.log('Getting data...');
  buildMessages();
}, 3600000);

// import bot from './src/bot';
// console.log('Bot is running Now!');
// bot.catch((err) => { console.log('Ooops', err) })
// bot.startPolling();
