// Import modules dotenv
require('dotenv').config();

// Import necessary modules
const TelegramBot = require('node-telegram-bot-api');

// The process of taking the token from .env
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Command: /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to your Telegram Bot! Type /menu to see the menu.');
});

// Command: /menu
bot.onText(/\/menu/, (msg) => {
    const chatId = msg.chat.id;
    const menuOptions = {
        reply_markup: {
            keyboard: [['hello', 'goodbye']],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    };

    bot.sendMessage(chatId, 'Choose an option:', menuOptions);
});

// Command: /hello
bot.onText(/\hello/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! 👋');
});

// Command: /goodbye
bot.onText(/\goodbye/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Goodbye! 👋');
});