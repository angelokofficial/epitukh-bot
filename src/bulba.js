	var TelegramBot = require('node-telegram-bot-api');
	var token = ''; //токен вашего бота
	var bot = new TelegramBot(token, {polling: false});
	var fs = require('fs');
	var chatid = msg.chat.id;
	var users = ['angelokofficial', 'gershik', 'EgoruOff', 'chorogon', 'fuckussr', 'amxlosted217', 'KosBeg', 'OctoNezd', 'WPSTUDIOofficial', 'MyDearEvr', 'zhalka', 'FRINGE_GHG', 'VictorDir', 'unknwn404', 'Leckk', 'Lyubimych', 'reloadingfoxofficial', 'Psixoz_Yeah', 'SuperPuperSteve', 'spaaaaacefan', 'Infernituum'];
//	var ipc = -1001133868291; //ed
	var ipc = -1001102571478; //ipc
	var isSpin = true;
	var oneList = ['Бульба дня запущена! А значит, что сегодня на ужин пюрешка!', 'Трактор выехал! Мешки с бульбой украдены...' , 'Выезжаю в огород сажать бульбу...', 'Готовимся ко вкусным драникам...'];
	var twoList = ['Так, так, так...', 'Ищем подозреваемого...', 'Жарим драники...' , 'Врубаем валлхак и захватываем бульбочку...'];
	var threeList = ['CAADAgADDAADkWgMAAE2gy03uVNJkAI', 'CAADAgADDgADkWgMAAF4a15udbXbSwI', 'CAADAgADHAADkWgMAAGNFTHDV5sjCQI', 'CAADAgADHgADkWgMAAFT6XtSH6NeMgI', 'CAADAgADVwADkWgMAAEbWbVloCTLmQI'];
	var fourList = ['Уфф, жостка', 'КЕК!', 'Уух, маладая бульбачка^^', 'Ну што тут можна сказаць...'];
	var fiveList = ['Ага! Віншую! Сёння ты бульба дня — ', 'Заводите трактора! Бульбой дня объявлен — ', 'Жарьте драники, сегодня бульба дня — ', 'Бацька па тэлявизару кажа, што бульба дня сёння — '];
	var randTextOne = oneList[Math.floor(Math.random() * oneList.length)];
	var randTextTwo = twoList[Math.floor(Math.random() * twoList.length)];
	var randTextThree = threeList[Math.floor(Math.random() * threeList.length)];
	var randTextFour = fourList[Math.floor(Math.random() * fourList.length)];
	var randTextFive = fiveList[Math.floor(Math.random() * fiveList.length)];
	var randUser = users[Math.floor(Math.random() * users.length)];
	if (msg.text != '/bulba@epitukh_bot') {
		console.log;
	} else if (chatid != ipc) {
		bot.sendSticker(chatid, 'CAADAgADwQMAAtQlfAnWSOPgAs6UbwI', {reply_to_message_id : msg.message_id});
	} else if (isSpin == true) {
		bot.sendMessage(chatid, 'Кажется, сегодня *бульба дня* уже крутилась. Посмотреть последний розыгрыш можно в закреплённом сообщении.',{parse_mode : 'Markdown'});
	} else if (msg.text == '/bulba@epitukh_bot') {
		console.log ('Бульба дня была запущена ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
		setTimeout(function() { bot.sendMessage(chatid, randTextOne) ; }, 100);
		setTimeout(function() { bot.sendMessage(chatid, randTextTwo) ; }, 2000);
		setTimeout(function() { bot.sendSticker(chatid, randTextThree) ; }, 5000);
		setTimeout(function() { bot.sendMessage(chatid, randTextFour) ; }, 7300);
		setTimeout(function() { bot.sendMessage(chatid, randTextFive + '@' + randUser) ; }, 9500);
		bot.pinChatMessage(chatid, msg.message_id);
		setTimeout(function() { eval(fs.readFileSync('src/autopin.js')+''); }, 9500); //пиннит бульбу	
};