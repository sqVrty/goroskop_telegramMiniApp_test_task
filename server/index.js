const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const webAppUrl = process.env.URL_ON_CLIENT_APP;

bot.start((ctx) =>
  ctx.reply("Нажмите кнопку ниже для просмотра гороскопа", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Ежедневный Гороскоп", web_app: { url: webAppUrl } }],
      ],
    },
  })
);

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
