// File: DiscordModerationBot/utils/cronJobs.js

const cron = require('node-cron');
const moderationService = require('../services/moderationService');

// Schedule a cron job to run every hour to check for inactive users and apply appropriate actions
cron.schedule('0 * * * *', async () => {
  try {
    const inactiveUsers = await moderationService.checkInactiveUsers();
    inactiveUsers.forEach(async (user) => {
      await moderationService.applyInactiveUserAction(user);
    });
  } catch (error) {
    console.error('Error in inactive user cron job:', error);
  }
});

// Schedule a cron job to run every day at midnight to clean up old moderation logs
cron.schedule('0 0 * * *', async () => {
  try {
    await moderationService.cleanupOldLogs();
  } catch (error) {
    console.error('Error in moderation log cleanup cron job:', error);
  }
});

// Add more cron jobs here for additional automated moderation tasks

module.exports = cronJobs;