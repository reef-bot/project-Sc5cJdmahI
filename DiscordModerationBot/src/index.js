// index.js

// Import necessary modules
const Discord = require('discord.js');
const config = require('../config/config');
const bot = require('./bot');

// Create a new Discord client
const client = new Discord.Client();

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log('Bot is ready to moderate your server!');
});

// Event listener for incoming messages
client.on('messageCreate', async (message) => {
    // Check if the message is a command and handle it
    if (message.content.startsWith(config.prefix)) {
        bot.handleCommand(message);
    }
});

// Log in to Discord with your app's token
client.login(config.token);