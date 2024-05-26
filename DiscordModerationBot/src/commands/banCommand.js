// banCommand.js

// Import necessary dependencies
const { Client, Message } = require('discord.js');

// Define the ban command logic
module.exports = {
  name: 'ban',
  description: 'Ban a user from the server',
  execute(message) {
    if (!message.member.hasPermission('BAN_MEMBERS')) {
      return message.reply('You do not have permission to use this command');
    }

    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Please mention a valid member of this server');
    }

    if (!member.bannable) {
      return message.reply('I cannot ban this user. Please check my permissions and role hierarchy');
    }

    // Ban the user and send a confirmation message
    member.ban()
      .then((bannedMember) => message.channel.send(`${bannedMember.user.tag} has been banned`))
      .catch((error) => {
        console.error(`An error occurred while banning the user: ${error}`);
        message.reply('There was an error trying to ban the user');
      });
  },
};