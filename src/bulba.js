	var TelegramBot = require('node-telegram-bot-api');
	var token = ''; //токен вашего бота
	var bot = new TelegramBot(token, {polling: false});
	var fs = require('fs');
	var exportingvariables = require('./src/exportingvariables');
	var chatid = msg.chat.id;
	var users = ['angelokofficial', 'gershik', 'EgoruOff', 'fuckussr', 'amxlosted217', 'KosBeg', 'OctoNezd', 'WPSTUDIOofficial', 'MyDearEvr', 'zhalka', 'VictorDir', 'unknwn404', 'Leckk', 'Lyubimych', 'reloadingfoxofficial', 'Psixoz_Yeah', 'spaaaaacefan', 'Infernituum'];
//	var ipc = -1001133868291; //ed
	var ipc = -1001102571478; //ipc
	var oneList = ['Бульба дня запущена! А значит, что сегодня на ужин пюрешка!', 'Трактор выехал! Мешки с бульбой украдены...' , 'Выезжаю в огород сажать бульбу...', 'Готовимся ко вкусным драникам...', 'О нет! Бегите глупцы! Бульба дня запущена.', 'Системы повреждены... Кто-то решил приготовить бульбу...', '### RUNNING src/bulba.js', 'Запускаем модули и поднимаем нейросети бульбы...'];
	var twoList = ['Жарим бульбу на I9 1337K BulbaLake', 'Ищем подозреваемого...', 'Жарим драники...' , 'Врубаем валлхак и захватываем бульбочку...', 'Детектим бульбочку...', 'Проверяем аптайм ядра...', 'Просим Габена запилить белорусский рубль в стим...', 'Запскаем майнинг на BelVidia GTX 1488Ti BULBA GAMING...'];
	var threeList = ['CAADAgADDAADkWgMAAE2gy03uVNJkAI', 'CAADAgADDgADkWgMAAF4a15udbXbSwI', 'CAADAgADHAADkWgMAAGNFTHDV5sjCQI', 'CAADAgADHgADkWgMAAFT6XtSH6NeMgI', 'CAADAgADVwADkWgMAAEbWbVloCTLmQI'];
	var fourList = ['Скупаем мешки с бульбой по оптимальной цене...', 'КЕК!', 'Уух, маладая бульбачка...', 'Выплачиваем старый долг и снова берем новый...', 'Ого-го...', 'Посылаем нахуй Герша в просьбе поменять в следующем сообщении тире на запятую...', 'Где-же она?', 'Так-так, что же тут у нас...'];
	var fiveList = ['Ага! Віншую! Сёння ты бульба дня — ', 'Заводите трактора! Бульбой дня объявлен — ', 'Жарьте драники, сегодня бульба дня — ', 'Бацька па тэлявизару кажа, што бульба дня сёння — ', 'Что? Где? Когда? А сегодня ты бульба дня — ', 'По расчетам моих белорусских нейросетей бульба дня сегодня ты — ', 'Стоять! Не двигаться! Сегодня ты бульба дня — ', 'После всего пережитого в этой стране, я готов объявить, что бульба дня сегодня ты — '];
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
		eval(fs.readFileSync('src/protect.js')+ ''); //активирует защиту
		setTimeout(function() { bot.sendMessage(chatid, randTextOne) ; }, 100);
		setTimeout(function() { bot.sendMessage(chatid, randTextTwo) ; }, 2000);
		setTimeout(function() { bot.sendSticker(chatid, randTextThree) ; }, 5000);
		setTimeout(function() { bot.sendMessage(chatid, randTextFour) ; }, 7300);
		setTimeout(function() { bot.sendMessage(chatid, randTextFive + '@' + randUser) ; }, 9500);
		setTimeout(function() { eval(fs.readFileSync('src/resetgame.js')+ ''); }, 9600); //сбрасывает защиту
		setTimeout(function() { fs.writeFile('src/exportingvariables.js', 'var date = new Date();\nvar d = date.getDate();\nif (d < 10) d = \'0\' + d\nmodule.exports.day = ' + d + ';' + '\nmodule.exports.bulba = ' + '\'' + '<b>' + '@' + randUser + '</b>' + '\'' + ';'); }, 9700); //заносит день и бульбу
};