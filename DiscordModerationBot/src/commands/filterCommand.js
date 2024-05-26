// filterCommand.js

const { MessageEmbed } = require('discord.js');
const { messageFilteringService } = require('../../services/messageFilteringService');

module.exports = {
  name: 'filter',
  description: 'Filter messages based on specified criteria',
  execute(message, args) {
    if (!args.length) {
      return message.reply('Please provide filtering criteria.');
    }

    const filteredMessages = messageFilteringService.filterMessages(args);

    if (filteredMessages.length === 0) {
      return message.channel.send('No messages found matching the criteria.');
    }

    const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Filtered Messages')
      .setDescription(filteredMessages.join('\n'));

    message.channel.send({ embeds: [embed] });
  },
};