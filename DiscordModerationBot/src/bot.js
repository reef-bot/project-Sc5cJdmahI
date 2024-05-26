// bot.js

const Discord = require('discord.js');
const { prefix, token } = require('../config/config');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Bot is ready to moderate!');
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from other bots
  if (!message.content.startsWith(prefix)) return; // Ignore messages not starting with prefix

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong!');
  } else if (command === 'filter') {
    // Implement message filtering logic
  } else if (command === 'warn') {
    // Implement warning logic
  } else if (command === 'ban') {
    // Implement banning logic
  }
});

client.login(token);