## EPitukh Bot
#### A telegram bot which specially created for [IP chat](https://t.me/vk2pda) in Telegram
![pic](https://img.shields.io/badge/status-discontinued-red.svg) [![pic](https://img.shields.io/cocoapods/l/AFNetworking.svg)](https://github.com/angelokofficial/telegram-bots/blob/epitukh/LICENSE)

#### Installation and startup
1. Install Node.js
1. Install all libraries which are listed below
1. Insert the authorization keys in `values/auth.js` file
1. Use the `node-dev /path/to/the/bot/core.js` command to start a bot.

#### Libraries
1. [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
2. [replace](https://www.npmjs.com/package/replace)
3. [node-dev](https://www.npmjs.com/package/node-dev)

#### Errors
1. `node-dev: not found` run: `npm install -g node-dev`
2. `Error: EFATAL: Telegram Bot Token not provided!` insert your token from [@botfather](t.me/botfather) in the `auth.js` file
