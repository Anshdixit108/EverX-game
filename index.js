
const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "1911391029:AAHS9VeCLmuRDU2a83-7yxAUQ6md_DM5iO8";
const server = express();
const bot = new TelegramBot(TOKEN, { polling: true } );
const port = process.env.PORT || 5000;
const gameName = "EverX";
const queries = {};

server.use(express.static(path.join(__dirname, 'public')));
bot.onText(/help/, (msg) => bot.sendMessage(msg.from.id, "This bot implements EverX game. Say /game if you want to play."));
bot.onText(/start|game/, (msg) => bot.sendGame(msg.from.id, gameName));
bot.on("callback_query", function (query) {
  if (query.game_short_name !== gameName) {
    bot.answerCallbackQuery(query.id, "Sorry, '" + query.game_short_name + "' is not available.");
  } else {
    queries[query.id] = query;
    let gameurl = "https://everx-game.herokuapp.com/index.html?id="+query.id;
    bot.answerCallbackQuery(query.id, {url: gameurl, show_alert: true});
  }
});

bot.on("inline_query", function(iq) {
  bot.answerInlineQuery(iq.id, [ { type: "game", id: "0", game_short_name: gameName } ] );
});

server.get("/highscore/:score", function(req, res, next) {
  if (!Object.hasOwnProperty.call(queries, req.query.id)) return   next();
  let query = queries[req.query.id];
  let options;
  if (query.message) {
    options = {
      chat_id: query.message.chat.id,
      message_id: query.message.message_id
    };
  } else {
    options = {
      inline_message_id: query.inline_message_id
    };
  }
  bot.setGameScore(query.from.id, parseInt(req.params.score),  options,
  function (err, result) {});
});

server.listen(port);
//console.log("run");