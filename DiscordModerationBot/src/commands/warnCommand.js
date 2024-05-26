// File: warnCommand.js

const { Client, Message } = require('discord.js');

/**
 * Warns a user on the discord server.
 * @param {Client} client - The discord client
 * @param {Message} message - The message that triggered the command
 * @param {String[]} args - The command arguments
 */
const warnCommand = async (client, message, args) => {
    try {
        // Check if the user has the necessary permissions to warn users
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.reply('You do not have permission to warn users.');
        }

        // Get the user to warn
        const user = message.mentions.users.first();
        if (!user) {
            return message.reply('Please mention the user to warn.');
        }

        // Get the reason for the warning
        const reason = args.slice(1).join(' ');

        // Send a warning message to the user
        user.send(`You have been warned in ${message.guild.name} for: ${reason}`);

        // Log the warning in the moderation log
        const moderationLog = require('../models/moderationLog');
        const newWarning = new moderationLog({
            userId: user.id,
            moderatorId: message.author.id,
            action: 'Warn',
            reason: reason,
        });
        await newWarning.save();

        // Send a confirmation message in the current channel
        message.channel.send(`Successfully warned ${user.tag} for: ${reason}`);
    } catch (error) {
        console.error('An error occurred in the warnCommand:', error);
        message.reply('An error occurred while trying to warn the user.');
    }
};

module.exports = warnCommand;