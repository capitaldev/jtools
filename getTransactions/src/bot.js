import Telegraf from 'telegraf';
import { TELEGRAM_KEY } from './const';

function test(ctx) {
  ctx.replyWithMarkdown('*Hii*');
}

const bot = new Telegraf(TELEGRAM_KEY)
bot.command('/test', test);

export default bot;