// File: webhooks.js

const axios = require('axios');
const { discordWebhookURL } = require('../config/config');

const sendWebhookNotification = async (message) => {
  try {
    const response = await axios.post(discordWebhookURL, { content: message });
    console.log('Webhook notification sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending webhook notification:', error.message);
  }
};

module.exports = {
  sendWebhookNotification,
};