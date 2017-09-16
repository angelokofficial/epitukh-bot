	var TelegramBot = require('node-telegram-bot-api');
	var token = ''; //токен вашего бота
	var bot = new TelegramBot(token, {polling: false}); 

	var chatid = msg.chat.id;
	bot.pinChatMessage(chatid, msg.message_id + 5).catch(function(error) {
		bot.sendMessage(chatid, 'Не могу запиннить, я без админки :c'); })