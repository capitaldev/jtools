import Telegraf from 'telegraf';
import { TELEGRAM_KEY } from './const';

function test(ctx) {
  // setTimeout(() => ctx.replyWithMarkdown('hi'), 3000);
  ctx.replyWithMarkdown('*Hii*');
}

const bot = new Telegraf(TELEGRAM_KEY)
bot.command('/test', test);

export default bot;