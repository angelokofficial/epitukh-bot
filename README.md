## EPitukh Bot
#### A telegram bot specially created for [IP chat](https://t.me/vk2pda) in Telegram
![pic](https://img.shields.io/badge/status-stable-brightgreen.svg) ![pic](https://img.shields.io/badge/bot-in%20development-lightgrey.svg) ![pic](https://img.shields.io/cocoapods/l/AFNetworking.svg)

##### Installation and startup
1. Install Node.js
1. Install all libraries which are listed below
1. Insert your token in this files: `core.js`, `src/bulba.js`, `src/bulbastat.js`
1. If you need Google Search (via /g command) insert `cx` from your search engine in Google Could Platform and api `key` from your Google Cloud Platform project.
1. Use `node-dev /path/to/the/bot/core.js` command for start the bot.

##### Libraries
1. [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)
2. [replace](https://www.npmjs.com/package/replace)
3. [node-dev](https://www.npmjs.com/package/node-dev)

##### Errors
1. `node-dev: not found` run: `npm install -g node-dev`
2. `Error: EFATAL: Telegram Bot Token not provided!` insert your token from [@botfather](t.me/botfather) in the files
