console.log('Loading frameworks...')
var TelegramBot = require('node-telegram-bot-api');
console.log('\nWelcome back, angelok.js! :)\n');

var token = '';
var bot = new TelegramBot(token, {polling: true});

/*	bot.on('message', function (msg) { 


});
*/
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
});

	bot.onText(/\Загугли (.+)/, function (msg, match) {
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

	bot.onText(/\загугли (.+)/, function (msg, match) {
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
		console.log('*****************\nАйди чата: ' + msg.chat.id + '\nАйди пользователя: ' + msg.from.id + '\n*****************');
		bot.sendMessage(msg.chat.id, 'check your debugger');
});

	bot.onText(/\/start/, function (msg) {
	bot.sendMessage(msg.chat.id, 'Hello World!');
});

	bot.onText(/\/cmds/, function (msg) {
	var userid = msg.from.id;
	var chatid = msg.chat.id;
	var msgtext = 'Привет, ' + msg.from.first_name + '!' + '\n\nПрикажи Егору тебе что-нибудь загуглить. Используй "загугли (запрос)", или /g (запрос).\n/angelok_gay — Ангелок гей или нет?\n/shatni — шатает Ангелка\nили /angelok (ваше сообщение) — шатает Ангелка, используя ваше сообщение\nРаботает ответ на луны/светлые луны/солнышко + ответ с "больной ублюдок"\n/user (юзернейм_без_собачки) (текст) — шатает указанного юзера с вашим сообщением.\n\n/admin — админские штуки (просьба не тыкать)\n\nПредложить функционал можно тут: @vk2pda, @angelokofficial.';
	if (msg.chat.id == -1001102571478) {
		bot.sendMessage(-1001102571478, msg.from.first_name + ', я скинул список тебе в лс. Если что, меня перенесли на новый аккаунт (@epitukh_bot), и если ты не получил от меня сообщения, напиши мне и введи команду там.');
		bot.sendMessage(userid, msgtext);
		} else {
		bot.sendMessage(userid, msgtext);
	console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');

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

	bot.onText(/\🌚/, function (msg) { //moon
	var bolnoiUbludok = '🌚 🌚 🌚 больной ублюдок 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝 🌝';
	var form = {};
	if (msg.text.length > 10) { 
		form.chat_id = msg.chat.id;
		form.reply_to_message_id = msg.message_id;
		form.text = bolnoiUbludok;
		bot._request('sendMessage', { form });
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else { 
		form.chat_id = msg.chat.id;
                form.reply_to_message_id = msg.message_id;
                form.text = '🌚';
                bot._request('sendMessage', { form });
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\🌝/, function (msg) { //lightmoon
	var bolnoiUbludok = '🌝 🌝 🌝 больной ублюдок 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚 🌚';
	var form = {};
	if (msg.text.length > 10) { 
		form.chat_id = msg.chat.id;
                form.reply_to_message_id = msg.message_id;
                form.text = bolnoiUbludok;
                bot._request('sendMessage', { form });
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else { 
                form.chat_id = msg.chat.id;
                form.reply_to_message_id = msg.message_id;
                form.text = '🌝';
                bot._request('sendMessage', { form });
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
}});

	bot.onText(/\🌞/, function (msg) { //sun
	var bolnoiUbludok = '🌚 🌚 🌚 больной ублюдок 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞 🌞';
	var form = {};
	if (msg.text.length > 10) { 
                form.chat_id = msg.chat.id;
                form.reply_to_message_id = msg.message_id;
                form.text = bolnoiUbludok;
                bot._request('sendMessage', { form });
		console.log ('Ответ на сообщение ' + '@' + msg.from.username + ' ' + '(' + msg.from.id + ')');
	} else { 
                form.chat_id = msg.chat.id;
                form.reply_to_message_id = msg.message_id;
                form.text = '🌞';
                bot._request('sendMessage', { form });
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

// Инлайн запрос

bot.on('inline_query', function(msg)
{
    var q_id = msg.id;
    var q_query = msg.query;
//  var q_from = msg.from;
//  var q_offset = msg.offset;

    var results = [];

    for (var i = 0; i < 10; ++i) {
	var InputTextMessageContent = {
	'message_text': '_Test 1_',
	'parse_mode': 'Markdown'
        };
        results.push(InputTextMessageContent);
    }

    bot.answerInlineQuery(q_id, results);
});

bot.on('chosen_inline_result', function(msg)
{
    console.log('Chosen:' + msg);
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
