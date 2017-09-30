	var TelegramBot = require('node-telegram-bot-api');
	var getKeys = require('./values/auth');
	var token = getKeys.token;
	var bot = new TelegramBot(token, {polling: false});
	var fs = require('fs');
	var exportingvariables = require('./bulba/exportingvariables');
	var chatid = msg.chat.id;
	var users = ['angelokofficial', 'gershik', 'EgoruOff', 'fuckussr', 'amxlosted217', 'KosBeg', 'OctoNezd', 'WPSTUDI0', 'MyDearEvr', 'zhalka', 'VictorDir', 'unknwn404', 'Leckk', 'Lyubimych', 'reloadingfoxofficial', 'Psixoz_Yeah', 'spaaaaacefan', 'Infernituum', 'FandrlessOfficial', 'igoose', 'SycheKit', 'GlitchF', 'Sominemo'];
//	var ipc = -1001133868291; //ed
	var ipc = -1001102571478; //ipc
	var oneList = ['<b>Бульба дня</b> запущена! А значит, что сегодня на ужин пюрешка!', 'Трактор выехал! Мешки с <b>бульбой</b> украдены...' , 'Выезжаю в огород сажать бульбу...', 'Готовимся ко вкусным драникам...', 'О нет! Бегите глупцы! <b>Бульба дня</b> запущена.', '<i>Системы повреждены... Кто-то решил приготовить бульбу...</i>', '<code>### RUNNING bulba.js</code>', '<i>Запускаем модули и поднимаем нейросети бульбы...</i>'];
	var twoList = ['<i>Жарим бульбу на I9 1337K BulbaLake</i>', '<i>Ищем подозреваемого...</i>', '<i>Жарим драники...</i>' , '<i>Врубаем валлхак и захватываем бульбочку...</i>', '<i>Детектим бульбочку...</i>', '<i>Проверяем аптайм ядра...</i>', '<i>Просим Габена запилить белорусский рубль в стим...</i>', '<i>Запскаем майнинг на BelVidia GTX 1488Ti BULBA GAMING...</i>'];
	var threeList = ['CAADAgADDAADkWgMAAE2gy03uVNJkAI', 'CAADAgADDgADkWgMAAF4a15udbXbSwI', 'CAADAgADHAADkWgMAAGNFTHDV5sjCQI', 'CAADAgADHgADkWgMAAFT6XtSH6NeMgI', 'CAADAgADVwADkWgMAAEbWbVloCTLmQI'];
	var fourList = ['<i>Скупаем мешки с бульбой по оптимальной цене...</i>', '<b>КЕК!</b>', '<b>Уух, маладая бульбачка...</b>', '<i>Выплачиваем старый долг и снова берем новый...</i>', '<b>Ого-го...</b>', '<i>Посылаем нахуй Герша в просьбе поменять в следующем сообщении тире на запятую...</i>', '<b>Где-же она?</b>', '<b>Так-так, что же тут у нас...</b>'];
	var fiveList = ['Ага! Віншую! Сёння ты <b>бульба дня</b> — ', 'Заводите трактора, <b>бульбой дня</b> объявлен — ', 'Жарьте драники, сегодня <b>бульба дня</b> — ', 'Бацька па тэлявизару кажа, што <b>бульба дня</b> сёння — ', 'Что? Где? Когда? А сегодня ты <b>бульба дня</b> — ', 'По расчетам моих белорусских нейросетей <b>бульба дня</b> сегодня ты — ', 'Стоять! Не двигаться! Сегодня ты <b>бульба дня</b> — ', '.∧＿∧\n( ･ω･｡)つ━☆・*。\n⊂  ノ    ・゜+.\nしーＪ   °。+ *´¨)\n         .· ´¸.·*´¨)\n          (¸.·´ (¸.·\'* ☆ ВЖУХ И <b>ТЫ БУЛЬБА</b>, '];
	var randTextOne = oneList[Math.floor(Math.random() * oneList.length)];
	var randTextTwo = twoList[Math.floor(Math.random() * twoList.length)];
	var randTextThree = threeList[Math.floor(Math.random() * threeList.length)];
	var randTextFour = fourList[Math.floor(Math.random() * fourList.length)];
	var randTextFive = fiveList[Math.floor(Math.random() * fiveList.length)];
	var randUser = users[Math.floor(Math.random() * users.length)];
	var isSpin = false;
	var date = new Date();
	var d = date.getDate();
	if (d < 10) d = '0' + d;
	if (msg.text != '/bulba@epitukh_bot') {
		console.log;
	} else if (chatid != ipc) {
		bot.sendSticker(chatid, 'CAADAgADwQMAAtQlfAnWSOPgAs6UbwI', {reply_to_message_id : msg.message_id});
		console.log ('[I] ' + 'Reply to the message from ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text != '/bulba@epitukh_bot') {
		console.log;
	} else if (d == exportingvariables.day) {
		bot.sendMessage(chatid, 'По результатам розыгрыша, <b>бульба дня</b> сегодня ты — ' + exportingvariables.bulba, {parse_mode : 'HTML'});
		console.log ('[I] ' + 'Reply to the message from ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (isSpin == true) {
		bot.sendMessage(chatid, 'По результатам розыгрыша, <b>бульба дня</b> сегодня ты — ' + exportingvariables.bulba, {parse_mode : 'HTML'});
		console.log ('[I] ' + 'Reply to the message from ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else {
		console.log ('[I] BOTD has been launched by ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
		eval(fs.readFileSync('bulba/protect.js')+ ''); //активирует защиту
		setTimeout(function() { bot.sendMessage(chatid, randTextOne, {parse_mode : 'HTML'}); }, 100);
		setTimeout(function() { bot.sendMessage(chatid, randTextTwo, {parse_mode : 'HTML'}); }, 2000);
		setTimeout(function() { bot.sendSticker(chatid, randTextThree, {parse_mode : 'HTML'}); }, 5000);
		setTimeout(function() { bot.sendMessage(chatid, randTextFour, {parse_mode : 'HTML'}); }, 7300);
		setTimeout(function() { bot.sendMessage(chatid, randTextFive + '@' + randUser, {parse_mode : 'HTML'}); }, 9500);
		setTimeout(function() { eval(fs.readFileSync('bulba/resetgame.js')+ ''); }, 9600); //сбрасывает защиту
		setTimeout(function() { fs.writeFile('bulba/exportingvariables.js', 'var date = new Date();\nvar d = date.getDate();\nif (d < 10) d = \'0\' + d\nmodule.exports.day = ' + d + ';' + '\nmodule.exports.bulba = ' + '\'' + '<b>' + '@' + randUser + '</b>' + '\'' + ';'); }, 9700); //заносит день и бульбу
};