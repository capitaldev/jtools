require('dotenv').config()
import buildMessages from './buildMessages';

console.log('Start!!!')
buildMessages();
setInterval(() => {
  console.log('Getting data...');
  buildMessages();
}, 3600000);