	var TelegramBot = require('node-telegram-bot-api');
	var getKeys = require('./values/auth');
	var token = getKeys.token;
	var bot = new TelegramBot(token, {polling: false});
	var chatid = msg.chat.id;
//	var ipc = -1001133868291; //ed
	var ipc = -1001102571478; //ipc
	if (chatid != ipc) {
		bot.sendSticker(chatid, 'CAADAgADwQMAAtQlfAnWSOPgAs6UbwI', {reply_to_message_id : msg.message_id});
	} else {
		bot.sendMessage(chatid, 'Топ бульбочек ин зе ворлд:\n\nyour top here' ,{parse_mode: "HTML"});
		console.log ('[I] ' + 'Reply to the message from ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
};