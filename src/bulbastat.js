var TelegramBot = require('node-telegram-bot-api');
	var token = ''; //токен вашего бота
var bot = new TelegramBot(token, {polling: false});
var chatid = msg.chat.id;

console.log ('[I] ' + 'Reply to the message from ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
bot.sendMessage(chatid, 'Топ бульбочек ин зе ворлд:\n\n1. <code>@EgoruOff</code> - <b>4 раза</b>\n2. <code>@Infernituum</code> - <b>3 раза</b>\n3. <code>@OctoNezd</code> - <b>3 раза</b>\n4. <code>@KosBeg</code> - <b>3 раза</b>\n5. <code>@FRINGE_GHG</code> - <b>3 раза</b>\n6. <code>@unknwn404</code> - <b>3 раза</b>\n7. <code>@angelokofficial</code> - <b>3 раза</b>\n8. <code>@Leckk</code> - <b>3 раза</b>\n9. <code>@fuckussr</code> - <b>3 раза</b>\n10. <code>@chorogon</code> - <b>3 раза</b>\n11. <code>@Lyubimych</code> - <b>3 раза</b>\n12. <code>@ZaMIk</code> - <b>2 раза</b>\n13. <code>@reloadingfoxofficial</code> - <b>2 раза</b>\n14. <code>@spaaaaacefan</code> - <b>2 раза</b>\n15. <code>@MyDearEvr</code> - <b>1 раз</b>\n16. <code>@SuperPuperSteve</code> - <b>1 раз</b>\n17. <code>@gershik</code> - <b>1 раз</b>\n18. <code>@zhalka</code> - <b>1 раз</b>' ,{parse_mode: "HTML"});