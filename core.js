// EPitukh Bot
// Copyright © 2017 Vitya Angelov
// For contact: https://t.me/angelokofficial

	console.log('Loading frameworks...')
	var TelegramBot = require('node-telegram-bot-api');
	var replace = require('replace');
	var fs = require('fs');
	console.log('\nWelcome back, angelok.js! :)\n');

	var token = '';
	var bot = new TelegramBot(token, {polling: true});
	let key = ''; //апи ключ вашего проекта в Google Cloud Platform
	let cx = ''; //айди вашей поисковой системы в Google Cloud Platform
	
	bot.onText(/\/bulbastat@epitukh_bot/, function (msg) {
	var chatid = msg.chat.id;
	var ipc = -1001102571478;
	var ed = -1001133879759;
	if (chatid == ipc) {
		bot.sendMessage(chatid,'Топ бульбочек ин зе ворлд:\n\n1. <code>@EgoruOff</code> - <b>4 раза</b>\n2. <code>@Infernituum</code> - <b>3 раза</b>\n3. <code>@Animehyiter</code> - <b>3 раза</b>\n4. <code>@OctoNezd</code> - <b>2 раза</b>\n5. <code>@angelokofficial</code> - <b>2 раза</b>\n6. <code>@FRINGE_GHG</code> - <b>2 раза</b>\n7. <code>@Lyubimych</code> - <b>2 раз</b>\n8. <code>@ZaMIk</code> - <b>2 раза</b>\n9. <code>@Leckk</code> - <b>2 раза</b>\n10. <code>@reloadingfoxofficial</code> - <b>2 раза</b>\n11. <code>@MyDearEvr</code> - <b>1 раз</b>\n12. <code>@spaaaaacefan</code> - <b>1 раз</b>\n13. <code>@chorogon</code> - <b>1 раз</b>\n14. <code>@svitty177</code> - <b>1 раз</b>\n15. <code>@SuperPuperSteve</code> - <b>1 раз</b>\n16. <code>@unknwn404</code> - <b>1 раз</b>\n17. <code>@KosBeg</code> - <b>1 раз</b>\n18. <code>@fuckussr</code> - <b>1 раз</b>\n19. <code>@gershik</code> - <b>1 раз</b>',{parse_mode: "HTML"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else {
		bot.sendMessage(chatid, 'Команда работает только в IPC.');
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');

}});
	
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
    .then(result => bot.sendMessage(msg.chat.id, result, {reply_to_message_id : msg.message_id}))
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
	var users = ['angelokofficial', 'EgoruOff', 'gershik', 'chorogon', 'fuckussr', 'FoxLuna', 'KosBeg', 'OctoNezd', 'ZaMIk', 'WPSTUDIOofficial', 'MyDearEvr', 'svitty177', 'zhalka', 'FRINGE_GHG', 'VictorDir', 'unknwn404', 'Leckk', 'Lyubimych', 'Animehyiter', 'reloadingfoxofficial', 'Psixoz_Yeah', 'SuperPuperSteve', 'spaaaaacefan', 'Infernituum', 'plkvich691'];
//	var ipc = -1001133879759; //ed
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
		bot.sendMessage(chatid, 'Кажется, сегодня *бульба дня* уже крутилась. Посмотреть последний розыгрыш можно в закреплённом сообщении.',{parse_mode : 'Markdown'});
	} else if (msg.text == '/bulba@epitukh_bot') {
		console.log ('Бульба дня была запущена ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
		setTimeout(function() { bot.sendMessage(chatid, randTextOne) ; }, 0);
		setTimeout(function() { bot.sendMessage(chatid, randTextTwo) ; }, 2000);
		setTimeout(function() { bot.sendSticker(chatid, randTextThree) ; }, 5000);
		setTimeout(function() { bot.sendMessage(chatid, randTextFour) ; }, 7300);
		setTimeout(function() { bot.sendMessage(chatid, randTextFive + '@' + randUser + '\n\nbeta') ; }, 9500);
		setTimeout(function() { eval(fs.readFileSync('protect.js')+''); }, 9600); //сбрасывает защиту
}});
		
	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	if (msg.text == '/g@epitukh_bot') {
		bot.sendMessage(chatid, '*Гуглопоиск с результатами*\n\nИспользование: /g (запрос)',{parse_mode : "Markdown"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '/glink@epitukh_bot') {
		bot.sendMessage(chatid, '*Гуглопоиск с ссылкой*\n\nИспользование: /glink (запрос)',{parse_mode : "Markdown"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '/g') {
		bot.sendMessage(chatid, '*Гуглопоиск с результатами*\n\nИспользование: /g (запрос)',{parse_mode : "Markdown"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '/glink') {
		bot.sendMessage(chatid, '*Гуглопоиск с ссылкой*\n\nИспользование: /glink (запрос)',{parse_mode: "Markdown"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '/bulba') {
		bot.sendMessage(chatid, '<b>Бульба дня</b>\n\nИспользование: /bulba@epitukh_bot',{parse_mode: "HTML"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '/bulbastat') {
		bot.sendMessage(chatid, '<b>Статистика «Бульбы дня»</b>\n\nИспользование: /bulbastat@epitukh_bot',{parse_mode: "HTML"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == '/time') {
		bot.sendMessage(chatid, '<b>Текущее время в МСК</b>\n\nИспользование: /time@epitukh_bot',{parse_mode: "HTML"});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
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
	var msgtext = 'Привет, ' + msg.from.first_name + '!' + '\n\n/bulba — игра «Бульба дня»\n/bulbastat — статистика по игре\n/g — гуглопоиск\n/glink — гуглопоиск с ссылкой\n/shatni — шатает ангелка\n/user — шатает по юзернейму\n/all - шатает всех (ограничено)\n/angelok_gay - что-то делает\n/time - время\n/cubes - бросает кубики\n\nБот также имеет разное прочее говно, помимо команд.';
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

	bot.onText(/\/time@epitukh_bot/, function (msg) {
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
	bot.sendMessage(chatid, h + ':' + n + ' / ' + d + '.' + m + '.' + y + ' / ' + 'GMT +3' + ' / ' + 'UTC +03' + ' / ' + 'Europe, Minsk', {reply_to_message_id : msg.message_id});
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
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});

/*
	bot.onText(/\/get (.*)/, function (msg, match) {
	var chatid = msg.chat.id;
	var resp = match[1];
	var list = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
	var listCaps = ['А', 'У', 'О', 'Ы', 'И', 'Э', 'Я', 'Ю', 'Ё', 'Е'];
	if (resp.charAt(0) == 'а') {
		
	} else (resp.charAt(0) == 'а') {
    	console.log('not detected');
}});
*/

	bot.on('message', function (msg) {
	var chatid = msg.chat.id; 
	var nr0 = Math.floor(Math.random()*99999);
	var nr1 = Math.floor(Math.random()*99999);
	var nr2 = Math.floor(Math.random()*10);
	var nr3 = Math.floor(Math.random()*10);
	var nr4 = Math.floor(Math.random()*10);
	var str1 = 'Соси хуй. Вы проиграли. Списалось ' + nr0 + ' монеток, на счету осталось ' + nr1 + ' монеток.\nЧисла не совпали, выпало: ' + nr2 + ' и ' + nr3;
	var str2 = 'Урашечки-хуяшечки :)\nВы проебали ' + nr0 + ' монеток. Числа совпали ' + nr4 + ' и ' + nr4;
	var words = [str1, str2];
	var wordsR = words[Math.floor(Math.random() * words.length)];
	if (msg.text == 'Питух, играем') {
		bot.sendMessage(chatid, wordsR, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == 'Герш, играем') {
		bot.sendMessage(chatid, 'Герш не игровой автомат :c', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == 'Ангелок, играем') {
		bot.sendMessage(chatid, 'Поиграл тебе за щеку', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msg.text == 'Фсцт, играем') {
		bot.sendMessage(chatid, 'Зайка Фсцт не играет🙃 ^^', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.on('message', function (msg) {
	var angelok = 148477866;
	var chatid = msg.chat.id;
	var stickers = ['CAADBQADEgADY8qwAAFqyxe8Ft4qVQI', 'CAADBQADFAADY8qwAAFLL6Bl6emnAwI', 'CAADBQADFgADY8qwAAHV__WTv3P0_QI', 'CAADBQADGAADY8qwAAE--qtfaNEXbgI', 'CAADBQADGgADY8qwAAHVwhBSlYtZcwI', 'CAADBQADHAADY8qwAAGgTKZBzBthNAI', 'CAADBQADHgADY8qwAAGpK3k4LRQ0egI', 'CAADBQADIAADY8qwAAF9QjHI-Jgc8AI', 'CAADBQADIgADY8qwAAFmKoIFfXc2VAI', 'CAADBQADJAADY8qwAAFM8kGl-y_ljAI', 'CAADBQADJgADY8qwAAHiQlhsHHn6VgI', 'CAADBQADKAADY8qwAAHmh8nX6SDj6wI', 'CAADBQADKgADY8qwAAGsbcQnkKCw5wI', 'CAADBQADLAADY8qwAAHsPB-oQep30wI', 'CAADBQADLgADY8qwAAFBjw_llLf84QI', 'CAADBQADMAADY8qwAAH_odlp9QEFHQI', 'CAADBQADMgADY8qwAAFj_S16q3K4kQI', 'CAADBQADNAADY8qwAAHXr-WVbW_-hQI', 'CAADBQADNgADY8qwAAHsiDs5qcuMpQI', 'CAADBQADOAADY8qwAAGuucx2zGhRNAI', 'CAADBQADOgADY8qwAAHL_CEVsCz3RAI', 'CAADBQADPAADY8qwAAE8MsqI7xmu3gI', 'CAADBQADPgADY8qwAAFMejzrUJhn0AI', 'CAADBQADQAADY8qwAAGimmCTvP2v-wI', 'CAADBQADQgADY8qwAAHQ_uqwDVuZNwI', 'CAADBQADRAADY8qwAAHrgcft1EP0XAI', 'CAADBQADRgADY8qwAAHNlRkAAS6Swf0C'];
	var rand = stickers[Math.floor(Math.random() * stickers.length)];
	if (msg.text != 'Апатия, играем') {
		console.log;
	} else if (msg.from.id != angelok) {
		bot.sendMessage(chatid, 'В Апатьку играть может только Ангелок 😍❤️', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	var msgtext = msg.text;
	if (msgtext.indexOf('Щек') != -1) {
		bot.sendMessage(chatid, 'Видит щека в щеке щеку\nСует щека в щеку щеку\nЩека щеку за щеку щеку\nЩеку щеку щеку щеку', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ЩЕК') != -1) {
		bot.sendMessage(chatid, 'Видит щека в щеке щеку\nСует щека в щеку щеку\nЩека щеку за щеку щеку\nЩеку щеку щеку щеку', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('щек') != -1) {
		bot.sendMessage(chatid, 'Видит щека в щеке щеку\nСует щека в щеку щеку\nЩека щеку за щеку щеку\nЩеку щеку щеку щеку', {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else {
		console.log;
}});

	bot.on('message', function (msg) {
	var chatid = msg.chat.id;
	var msgtext = msg.text;
	var stickers = ['CAADAgADegEAAqqX2QgipNx7yH1emgI', 'CAADAgADzAIAAu0ddgrlHMuwfvfsYwI', 'CAADAgADlAEAAu0ddgr9d9X3TvyrlAI', 'CAADAgADEQYAAiVUQBNdhzfaD769CwI', ' CAADAgAD-AIAAiFTBAABzvgMgY27edwC', 'CAADAgAD8gIAAiFTBAABmT4fqYM4spgC', 'CAADAgAD8AIAAiFTBAABrVORLQQM7i8C', 'CAADAgAD7gIAAiFTBAABw4zJcdtQqkAC', 'CAADAgAD7AIAAiFTBAAB_bRifLIocgQC', 'CAADAgAD7wMAAtQlfAk5Dk6f77taogI', 'CAADAgADewADV_cqCySXmLEi2qmfAg', 'CAADAgADPA0AAlOx9wPNS7SP6Uhq1AI', 'CAADBAADVAgAAlUYSwLiDbjJpSAhiwI', 'CAADAgADxgMAAtQlfAmjQPFRjMzWxAI', 'CAADAgAD2gIAAu0ddgpZ9i0pTqGfhAI'];
	var rand = stickers[Math.floor(Math.random() * stickers.length)];
	if (msgtext.indexOf('Ор') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ОР') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ор') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ААА') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ааа') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('Ааа') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('АХАХ') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ахах') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('Ахах') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('ХАХА') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('хаха') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else if (msgtext.indexOf('Хаха') == 0) {
		bot.sendSticker(chatid, rand, {reply_to_message_id : msg.message_id});
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\)/, function (msg) {
	var chatid = msg.chat.id;
	bot.sendSticker(chatid, 'CAADAgADtQMAAtQlfAlKq1LJYDkonwI', {reply_to_message_id : msg.message_id});
}); bot.onText(/\(/, function (msg) {
	var chatid = msg.chat.id;
	bot.sendSticker(chatid, 'CAADAgAD-wMAAtQlfAmYugABy4pCSzAC', {reply_to_message_id : msg.message_id});
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

	bot.onText(/\/clearlogs/, function (msg) {
	var chatid = msg.chat.id;
	if (msg.from.id != angelok) {
		console.log;
	} else {
		console.log('n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
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
	} else if (msg.text == '/reset') {
		eval(fs.readFileSync('resetgame.js')+''); //сбрасывает защиту
		console.log('reset successfully');
}});