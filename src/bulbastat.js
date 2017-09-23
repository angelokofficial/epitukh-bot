	var TelegramBot = require('node-telegram-bot-api');
	var token = ''; //токен вашего бота
	var bot = new TelegramBot(token, {polling: false});
	var chatid = msg.chat.id;
//	var ipc = -1001133868291; //ed
	var ipc = -1001102571478; //ipc
	if (chatid != ipc) {
		bot.sendSticker(chatid, 'CAADAgADwQMAAtQlfAnWSOPgAs6UbwI', {reply_to_message_id : msg.message_id});
	} else {
		bot.sendMessage(chatid, 'Топ бульбочек ин зе ворлд:\n\n1. <code>@EgoruOff</code> - <b>4 раза</b>\n2. <code>@chorogon</code> - <b>4 раза</b>\n3. <code>@fuckussr</code> - <b>4 раза</b>\n4. <code>@unknwn404</code> - <b>4 раза</b>\n5. <code>@Infernituum</code> - <b>3 раза</b>\n6. <code>@OctoNezd</code> - <b>3 раза</b>\n7. <code>@KosBeg</code> - <b>3 раза</b>\n8. <code>@angelokofficial</code> - <b>3 раза</b>\n9. <code>@Leckk</code> - <b>3 раза</b>\n10. <code>@Lyubimych</code> - <b>3 раза</b>\n11. <code>@ZaMIk</code> - <b>2 раза</b>\n12. <code>@reloadingfoxofficial</code> - <b>2 раза</b>\n13. <code>@spaaaaacefan</code> - <b>2 раза</b>\n14. <code>@amxlosted217</code> - <b>2 раза</b>\n15. <code>@MyDearEvr</code> - <b>1 раз</b>\n16. <code>@SuperPuperSteve</code> - <b>1 раз</b>\n17. <code>@gershik</code> - <b>1 раз</b>\n18. <code>@zhalka</code> - <b>1 раз</b>' ,{parse_mode: "HTML"});
		console.log ('[I] ' + 'Reply to the message from ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
};