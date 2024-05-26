// userActivityMonitoringService.js

// Importing necessary packages and modules
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Function to monitor user activity in the discord server
const monitorUserActivity = async (userId) => {
  try {
    const response = await axios.get(`https://discord.com/api/v9/users/${userId}/activity`, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    });

    const userActivity = response.data;

    // Process user activity data and perform necessary actions

    return userActivity;
  } catch (error) {
    console.error(`Error monitoring user activity: ${error.message}`);
    return null;
  }
};

// Exporting the monitorUserActivity function for external use
module.exports = {
  monitorUserActivity,
};