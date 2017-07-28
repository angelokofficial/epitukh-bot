	console.log('Loading frameworks...')
	var TelegramBot = require('node-telegram-bot-api');
	var replace = require('replace');
	var fs = require('fs');
	console.log('\nWelcome back, angelok.js! :)\n');

	var token = '';
	var bot = new TelegramBot(token, {polling: true});
	let key = ''; //апи ключ вашего проекта в Google Cloud Platform
	let cx = ''; //айди вашей поисковой системы в Google Cloud Platform
	
	bot.onText(/\/g (.*)/i, (msg, form) => {
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
    return new Promise((resolve, reject) => {
    let req = require('https').get("https://www.googleapis.com/customsearch/v1?" + "key=" + key + "&cx=" + cx + "&q=" + encodeURIComponent(form[1]), (res) => {
    let body = '';
    res.setEncoding('utf8');
    res.on('data', chunk => body += chunk);
    res.on('end', () => resolve(JSON.parse(body)))
});
    req.on('error', reject);
    req.end();
})
    .then(x => {
    return x.items.map(item => {
    return [
    item.title,
    item.link
    ].join('\n');
})	.join('\n\n')
})
    .then(result => bot.sendMessage(msg.chat.id, result))
    .catch(x => 'еррорыч, ёпть');
});
	
	bot.on('message', function (msg) {
	if (msg.text == '/start') {
		bot.sendMessage(msg.chat.id, 'Hello World!'); 
		console.log('@' + msg.from.username + ' написал боту в лс');
}});

	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	var yes = 'Да';
	var yesCaps = 'ДА';
	var yesLower = 'да';
	var no = 'Нет';
	var noCaps = 'НЕТ';
	var noLower = 'нет';
	if (msg.text == yes) {
		bot.sendMessage(chatid, "Пизда🌝" ,{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == no) {
		bot.sendMessage(chatid, 'Пидора ответ🌚' ,{reply_to_message_id : msg.message_id});   
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == yesCaps) {
		bot.sendMessage(chatid, "Пизда🌝" ,{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == noCaps) {
		bot.sendMessage(chatid, 'Пидора ответ🌚' ,{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == noLower) {
		bot.sendMessage(chatid, 'Пидора ответ🌚' ,{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == yesLower) {
		bot.sendMessage(chatid, "Пизда🌝" ,{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

//бульба дня
//W: TOO MANY GOVNOKOD, PLEASE TRY POMENSHE HUETY
	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	var users = ['angelokofficial', 'EgoruOff', 'gershik', 'vozzurg', 'voidnull', 'Windows10pro', 'KosBeg', 'OctoNezd', 'ZaMIk', 'WPSTUDIOofficial', 'MyDearEvr', 'svitty177', 'zhalka', 'FRINGE_GHG', 'VictorDir', 'unknwn404', 'Leckk', 'Lyubimych', 'Animehyiter', 'reloadingfoxofficial', 'SoulOfDefend', 'Psixoz_Yeah', 'SuperPuperSteve', 'spaaaaacefan', 'EnzoExotias', 'augustreinhardt', 'Infernituum', 'plkvich691'];
	var ipc = -1001102571478;
	var pidor = 'undefined';
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
		console.log
	} else if (chatid != ipc) {
		bot.sendMessage(chatid, 'Команда доступна только в IPC.');
	} else if (isSpin == true) {
		bot.sendMessage(chatid, 'Кажется, сегодня *бульба дня* уже крутилась. Посмотреть последний розыгрыш можно по хештегу #bulba',{parse_mode : 'Markdown'});
	} else if (msg.text == '/bulba') {
		console.log ('Бульба дня была запущена ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
		setTimeout(function() { bot.sendMessage(chatid, randTextOne) ; }, 0);
		setTimeout(function() { bot.sendMessage(chatid, randTextTwo) ; }, 2000);
		setTimeout(function() { bot.sendSticker(chatid, randTextThree) ; }, 5000);
		setTimeout(function() { bot.sendMessage(chatid, randTextFour) ; }, 7300);
		setTimeout(function() { bot.sendMessage(chatid, randTextFive + '@' + randUser + '\n\n#bulba') ; }, 9500);
		setTimeout(function() { eval(fs.readFileSync('protect.js')+'') ; }, 9600); //активирует защиту
}});

/* 		if (msg.text == '/bulbastat') {
		bot.sendMessage(chatid, 'Данный функционал находится в режиме БЕТА тестирования. Работать может криво, т.к недопилен полностью. Однако, оно работает и со временем будет развиваться.\n\nТоп пока не сделан :(');
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
*/
//триггер, если юзер просто ввёл команду без запроса
	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	if (msg.text == '/g@epitukh_bot') {
		bot.sendMessage(chatid, '*Гуглопоиск с результатами*\n\nИспользование: /g (запрос)',{parse_mode : "Markdown"});
	} else if (msg.text == '/glink@epitukh_bot') {
		bot.sendMessage(chatid, '*Гуглопоиск с ссылкой*\n\nИспользование: /glink (запрос)',{parse_mode : "Markdown"});
	} else if (msg.text == '/g') {
		bot.sendMessage(chatid, '*Гуглопоиск с результатами*\n\nИспользование: /g (запрос)',{parse_mode : "Markdown"});
	} else if (msg.text == '/glink') {
		bot.sendMessage(chatid, '*Гуглопоиск с ссылкой*\n\nИспользование: /glink (запрос)',{parse_mode: "Markdown"});
	} else if (msg.text == '/bulba') {
		bot.sendMessage(chatid, '<b>Бульба дня</b>\n\nИспользование: /bulba@epitukh_bot',{parse_mode: "HTML"});
}});	


	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	var bolnoiUbludok = '🌚 🌚 🌚 больной ублюдок 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝';
	var moons = ['🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚', '🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚🌚'];
	if (msg.text == '🌚') {
		bot.sendMessage(chatid, '🌚',{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌚🌚') {
		bot.sendMessage(chatid, '🌚🌚',{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌚🌚🌚') {
		bot.sendMessage(chatid, '🌚🌚🌚',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌚🌚🌚🌚') {
		bot.sendMessage(chatid, '🌚🌚🌚🌚',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌚🌚🌚🌚🌚') {
		bot.sendMessage(chatid, '🌚🌚🌚🌚🌚',{reply_to_message_id : msg.message_id}); 
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌝') {
		bot.sendMessage(chatid, '🌝',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌝🌝') {
		bot.sendMessage(chatid, '🌝🌝',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌝🌝🌝') {
		bot.sendMessage(chatid, '🌝🌝🌝',{reply_to_message_id : msg.message_id});	
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌝🌝🌝🌝') {
		bot.sendMessage(chatid, '🌝🌝🌝🌝',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌝🌝🌝🌝🌝') {
		bot.sendMessage(chatid, '🌝🌝🌝🌝🌝',{reply_to_message_id : msg.message_id});	
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌞') {
		bot.sendMessage(chatid, '🌞',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌞🌞') {
		bot.sendMessage(chatid, '🌞🌞',{reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌞🌞🌞') {
		bot.sendMessage(chatid, '🌞🌞🌞',{reply_to_message_id : msg.message_id});	
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌞🌞🌞🌞') {
		bot.sendMessage(chatid, '🌞🌞🌞🌞',{reply_to_message_id : msg.message_id});	
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '🌞🌞🌞🌞🌞') {
		bot.sendMessage(chatid, '🌞🌞🌞🌞🌞',{reply_to_message_id : msg.message_id});	
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
		
}});

	bot.onText(/\🌚🌚🌚🌚🌚🌚/, function (msg) {
	var chatid = msg.chat.id;
	var bolnoiUbludokMoon = '🌚 🌚 🌚 больной ублюдок 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝';
	bot.sendMessage(chatid, bolnoiUbludokMoon,{reply_to_message_id : msg.message_id}); 
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}); bot.onText(/\🌝🌝🌝🌝🌝🌝/, function (msg) {
	var chatid = msg.chat.id;
	var bolnoiUbludokLight = '🌝 🌝 🌝 больной ублюдок 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚';
	bot.sendMessage(chatid, bolnoiUbludokLight,{reply_to_message_id : msg.message_id}); 
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}); bot.onText(/\🌞🌞🌞🌞🌞🌞/, function (msg) {
	var chatid = msg.chat.id;
	var bolnoiUbludokSun = '🌚 🌝 🌚 🌝 больной ублюдок 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞'; 
	bot.sendMessage(chatid, bolnoiUbludokSun,{reply_to_message_id : msg.message_id}); 
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});
	
 	bot.onText(/\/glink (.+)/, function (msg, match) {
	var resp = match[1];
	var chatid = msg.chat.id;
	var msgtext = msg.text;
	var chatid = msg.chat.id;
	var form = {};
	form.parse_mode = 'Markdown';
	form.reply_to_message_id = msg.message_id;
	form.disable_web_page_preview = true;
	form.chat_id = msg.chat.id;
	form.text = '*Держи ссылку, зай:*\n\n' + 'http://www.google.ru/search?q=' + resp.replace(/ /ig, '+');
	bot._request('sendMessage', { form });
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});

	bot.onText(/\/debug/, function (msg) {
	console.log('chat_id: ' + msg.chat.id + '\nfrom_id: ' + msg.from.id + '\n');
	bot.sendMessage(msg.chat.id, 'debug');
});

	bot.onText(/\/cmds/, function (msg) {
	var userid = msg.from.id;
	var chatid = msg.chat.id;
	var ipc = -1001102571478;
	var msgtext = 'Привет, ' + msg.from.first_name + '!' + '\n\n/bulba — игра «Бульба дня»\n/g — гуглопоиск\n/glink — гуглопоиск с ссылкой\n/shatni — шатает ангелка\n/user — шатает по юзернейму\n/all - шатает всех (ограничено)\n/angelok_gay - что-то делает\n/time - время\n/cubes - бросает кубики\n\nБот также имеет разное прочее говно, помимо команд.';
	if (chatid == ipc) {
		bot.sendMessage(ipc, 'Пробую тебе скинуть...',{reply_to_message_id : msg.message_id}); 
		console.log('@' + msg.from.username + ' написал боту в лс');
		bot.sendMessage(userid, msgtext).catch(function(error) {
		bot.sendMessage(chatid, 'Ты должен написать мне первым, чтобы я мог писать потом тебе.'); })		
	} else {
		bot.sendMessage(userid, msgtext);
}});
	
	bot.onText(/\/angelok_gay/, function (msg) {
	var chatid = msg.chat.id;
	var sendtext = ['Пiшов нахуй', 'Сам такой', 'Нет, лол', 'Саси', 'Ну ты чо, проверить хочешь чо ли, а?', '🌚', 'А вот щас абидно было', 'авххаыхахывхаых', 'Не дрочи, подумой', 'Ну го, хули', 'Ыыыы', 'Ебацца вздумал?', 'Ты чё меня шатаешь???', '(', 'Пидор'];
	var randtext = sendtext[Math.floor(Math.random() * sendtext.length)];
	if (msg.chat.id == -1001102571478) {
		bot.sendMessage(-1001102571478, randtext);
	} else {
		bot.sendMessage(chatid, 'Команда работает только в IPC.');
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\/shatni/, function (msg) {
	var chatid = msg.chat.id;
	var ipc = -1001102571478;
	var zamik = 215119658;
	var sendtext = ['@angelokofficial, ты давно не дрочил?', 'Эй, @angelokofficial, тут тебя зовут🌚🌚🌚', '@angelokofficial ты пидор хавхахвахыхавых', 'Привет, @angelokofficial. Надеюсь, я тебе не мешаю🌚', 'Го шатать Ангелка?\n@angelokofficial\n@angelokofficial\n@angelokofficial', 'Ангелок щас небось в тёрку играет, и тут прикиньте, хедсап вылазит и жопа рвётся. А, @angelokofficial?', 'Короче, @angelokofficial, я тебя спас, и в благородство играть не буду.', 'Ваш анальник атакован, @angelokofficial! Причина: ваш шатают', 'Извините, @angelokofficial, вас тут шатнули', '@angelokofficial чьмо', '@angelokofficial, когда меня обновишь?', '@angelokofficial, чёт жрать захотелось', '@angelokofficial, го чайка ебанём?', '@angelokofficial, уроки сделал?', 'Ну чо, @angelokofficial?', 'Шатаем пидора @angelokofficial @angelokofficial @angelokofficial', 'Шатни меня сильнее, @angelokofficial', '@angelokofficial, неси картоху, будем жарить драники', '@angelokofficial, у меня есть хорошое гей-порно… (читать голосом и интонацией капитана команды сбороной Мурманска по квн)'];
	var randtext = sendtext[Math.floor(Math.random() * sendtext.length)];
	if (msg.chat.id != ipc) {
		bot.sendMessage(chatid, 'Команда работает только в IPC.');
	} else {
		if (msg.from.id == zamik) {
			bot.sendMessage(ipc, 'А вот Замик идёт нахуй, шатай сам🌚🌚🌚');
		} else {
			bot.sendMessage(ipc, randtext);
		}
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\/angelok (.+)/, function (msg, match) {
	var chatid = msg.chat.id;
	var resp = match[1];
	var ipc = -1001102571478;
	if (msg.chat.id == ipc) {
			bot.sendMessage(ipc, '@angelokofficial, ' + resp);
		} else {
			bot.sendMessage(chatid, 'Команда работает только в IPC.');
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\/user (.+)/, function (msg, match) {
	var chatid = msg.chat.id;
	var user = match[1];
	var ipc = -1001102571478;
	if (chatid == ipc) {
		bot.sendMessage(ipc, '@' + user);
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else {
		bot.sendMessage(chatid, 'Команда работает только в IPC');
		console.log ('Не удалось выполнить команду у ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\/time/, function (msg) {
	var chatid = msg.chat.id;
	var date = new Date();
	var d = date.getDate();
	if (d < 10) d = '0' + d;
	var m = date.getMonth() + 1;
	if (m < 10) m = '0' + m;
	var y = date.getFullYear() % 100;
	if (y < 10) y = '0' + y;
	var h = date.getHours();
	if (h < 10) h = '0' + h;
	var n = date.getMinutes();
	if (n < 10) n = '0' + n;  
	var s = date.getSeconds();
	if (s < 10) s = '0' + s;
	var ms = date.getMilliseconds();
	bot.sendMessage(chatid, 'Сейчас ' + d + '.' + m + '.' + y + ' ' + h + ':' + n + ' 🌚');
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});
	
	bot.onText(/\@angelokofficial/, function (msg) {
	var chatid = msg.chat.id;
	bot.sendMessage(chatid, 'Анус себе шатни, ' + '@' + msg.from.username ,{reply_to_message_id : msg.message_id}); 
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});
	
	bot.onText(/\/cubes/, function (msg) {
    var chatid = msg.chat.id;
	var cubes = ['⚀ ⚀', '⚀ ⚁', '⚀ ⚂', '⚀ ⚃', '⚀ ⚄', '⚀ ⚅', '⚁ ⚀', '⚁ ⚁', '⚁ ⚂', '⚁ ⚃', '⚁ ⚄', '⚁ ⚅',  '⚂ ⚀', '⚂ ⚁', '⚂ ⚂', '⚂ ⚃', '⚂ ⚄', '⚂ ⚅', '⚃ ⚀', '⚃ ⚁', '⚃ ⚂', '⚃ ⚃', '⚃ ⚄', '⚃ ⚅', '⚄ ⚀', '⚄ ⚁', '⚄ ⚂', '⚄ ⚃', '⚄ ⚄', '⚄ ⚅', '⚅ ⚀', '⚅ ⚁', '⚅ ⚂', '⚅ ⚃', '⚅ ⚄', '⚅ ⚅'];
	var cubesRand = cubes[Math.floor(Math.random() * cubes.length)];
	bot.sendMessage(chatid, cubesRand);
});

//админские игрушки
	var failed = 'У вас нет прав на выполнение этой команды.';
	var angelok = 148477866;
	var ipc = -1001102571478;

        bot.onText(/\ипч (.+)/, function (msg, match) {
        var chatid = msg.chat.id;
        var resp = match[1];
        if (msg.from.id == angelok) {
        	bot.sendMessage(ipc, resp);
                console.log('Ты успешно написал в IPC :)');
        } else {
                console.log;
}});

	bot.onText(/\#clearlogs/, function (msg) {
	var chatid = msg.chat.id;
	if (msg.from.id == angelok) {
		console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
	} else {
		console.log;
}});

	bot.onText(/\#log (.+)/, function (msg, match) {
	var resp = match[1];
	if (msg.from.id == angelok) {
		console.log(resp);
	} else {
		console.log;
}});

	bot.on('message', function (msg) {
	if (msg.from.id != angelok) {
		console.log;
	} else if (msg.text == '#reset') {
		eval(fs.readFileSync('resetgame.js')+''); //сбрасывает защиту
		console.log('reset successfully');
}});