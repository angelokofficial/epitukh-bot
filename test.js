console.log('Loading frameworks...')
var TelegramBot = require('node-telegram-bot-api');
var replace = require('replace');
console.log('\nWelcome back, angelok.js! :)\n');

var token = '';
var bot = new TelegramBot(token, {polling: true});

/*	// екзекутор javascrpit кода
	bot.onText(/\/eval (.+)/, (msg, match) => {
	var res = "";
	var chatid = msg.chat.id;
	var userid = msg.from.id;
	var angelok = 148477866;
	if (userid == angelok) {
		try {
		res = eval(match[1]);
		} catch(e) {
		res = "Ошибка " + e;
}
		bot.sendMessage(chatid, res);
	} else {
		bot.sendMessage(chatid, 'У вас нет доступа к этой команде.');	
}}); */
	
	bot.onText(/\@angelokofficial/, function (msg) {
	var chatid = msg.chat.id;
	bot.sendMessage(chatid, 'Анус себе шатни, ' + '@' + msg.from.username ,{reply_to_message_id : msg.message_id}); 
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});

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
	
	bot.onText(/\/g (.+)/, function (msg, match) {
	var resp = match[1];
	var chatid = msg.chat.id;
	var msgtext = msg.text;
	var chatId = msg.chat.id;
	var form = {};
	form.chat_id = msg.chat.id;
	form.text = 'Ебать ты ленивый хуй, но всё же я бот, который должен подчиняться всем. В любом случае, я за тебя залез в Google, держи ссылку:\n\n' + 'http://www.google.ru/search?q=' + resp.replace(/ /ig, '+');
	form.disable_web_page_preview = 'true';
    form.reply_to_message_id = msg.message_id;
    bot._request('sendMessage', { form });
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}); bot.onText(/\Загугли (.+)/, function (msg, match) {
	var resp = match[1];
	var chatid = msg.chat.id;
	var msgtext = msg.text;
	var chatId = msg.chat.id;
	var form = {};
	form.chat_id = msg.chat.id;
	form.text = 'Ебать ты ленивый хуй, но всё же я бот, который должен подчиняться всем. В любом случае, я за тебя залез в Google, держи ссылку:\n\n' + 'http://www.google.ru/search?q=' + resp.replace(/ /ig, '+');
	form.disable_web_page_preview = 'true';
	form.reply_to_message_id = msg.message_id;
    bot._request('sendMessage', { form });
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}); bot.onText(/\загугли (.+)/, function (msg, match) {
	var resp = match[1];
	var chatid = msg.chat.id;
	var msgtext = msg.text;
	var chatId = msg.chat.id;
	var form = {};
	form.chat_id = msg.chat.id;
	form.text = 'Ебать ты ленивый хуй, но всё же я бот, который должен подчиняться всем. В любом случае, я за тебя залез в Google, держи ссылку:\n\n' + 'http://www.google.ru/search?q=' + resp.replace(/ /ig, '+');
	form.disable_web_page_preview = 'true';
	form.reply_to_message_id = msg.message_id;
    bot._request('sendMessage', { form });
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
});

	bot.onText(/\/debug/, function (msg) {
		console.log('chat_id: ' + msg.chat.id + '\nfrom_id: ' + msg.from.id + '\n');
		bot.sendMessage(msg.chat.id, 'debug');
});

	bot.onText(/\/start/, function (msg) {
	bot.sendMessage(msg.chat.id, 'Hello World!'); 
});

	bot.onText(/\/cmds/, function (msg) {
	var userid = msg.from.id;
	var chatid = msg.chat.id;
	var ipc = -1001102571478;
	var msgtext = 'Привет, ' + msg.from.first_name + '!' + '\n\n/g, загугли — гуглопоиск\n/shatni — шатает ангелка\n/user — шатает по юзернейму\n/all - шатает всех\n/time - время';
	if (chatid == ipc) {
		bot.sendMessage(ipc, 'Пробую тебе скинуть...',{reply_to_message_id : msg.message_id}); 
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
	var form = {};
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

	bot.onText(/\/all/, function (msg) {
	var chatid = msg.chat.id;
	var ipc = -1001102571478;
	if (msg.chat.id == ipc) {
		bot.sendMessage(ipc, 'Эй, пидоры: @angelokofficial @veselcraft @KosBeg @voidnull @EgoruOff @Leckk @Sominemo @Infernituum @fscty @gershik @spaaaaacefan @reloadingfoxofficial @unknwn404 @SoulOfDefend @Undertale_2K17 @EnzoExotias @augustreinhardt @Psixoz_Yeah @veletrif @m_martynenko @plkvich691 @zhalka, @shellope, вы где тут?');
	} else {
		bot.sendMessage(chatid, 'Команда работает только в IPC.');
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
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

	bot.onText(/\/test/, function (msg) {
	var chatid = msg.chat.id;
	var users = ['angelokofficial', 'voidnull', 'spaaaaacefan', 'WPSTUDIOofficial', 'gershik', 'windows10iso', 'KosBeg', 'zhalka', 'EgoruOff', 'Leckk', 'SoulOfDefend', 'reloadingfoxofficial', 'svitty177', 'ZaMIk', 'VictorDir', 'Lyubimych', 'Sominemo', 'unknwn404', 'Psixoz_Yeah', 'fscty', 'plkvich691'];
	var pidor = 'undefined';
	var isSpin = 'no_spin';
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
	bot.sendMessage(chatid, ('Машины выехали! Система взломана...'));
	setTimeout(function() { bot.sendMessage(chatid, ('Сканирую...')) ; }, 2000);
	setTimeout(function() { bot.sendMessage(chatid, ('КЕК!')) ; }, 5000);
	setTimeout(function() { bot.sendMessage(chatid, ('Ну ты и кодер — @angelokofficial')) ; }, 7300);
	});

// Служебный функционал

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
             	bot.sendMessage(msg.chat.id, failed);
                console.log('Этот пидор: ' + '@' + msg.from.username + ' (' + msg.from.id + ')' + ', пытался написать в IPC.');
}});

	bot.onText(/\#clearlogs/, function (msg) {
	var chatid = msg.chat.id;
                if (msg.from.id == angelok) {
                        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
                        console.log('Logs has been cleared.');
			bot.sendMessage(chatid, 'Логи успешно очищены.');
                } else {
                        bot.sendMessage(msg.chat.id, failed);
                        console.log('Этот пидор: ' + '@' + msg.from.username + ' (' + msg.from.id + ')' + ', пытался почистить логи.');

}});

	bot.onText(/\#log (.+)/, function (msg, match) {
	var resp = match[1];
	if (msg.from.id == angelok) {
		console.log(resp);
	} else {
		bot.sendMessage(msg.chat.id, failed);
}});


	bot.onText(/\/admin/, function (msg) {
	var chatid = msg.chat.id;
	if (msg.from.id == angelok) {
		bot.sendMessage(angelok, 'ипч (текст) -- отправляет сообщение в ipc от имени бота\n\n#log (текст) -- отправляет сообщение в лог/консоль\n\n#clearlogs -- чистит вилкой логи\n\n/admin -- этот список');
	} else {
		bot.sendMessage(chatid, failed);
		console.log('Этот пидор: ' + '@' + msg.from.username + ' (' + msg.from.id + ')' + ', пытался посмотреть админские фичи.');
}});