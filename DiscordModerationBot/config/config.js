// config.js

const config = {
  discordToken: 'YOUR_DISCORD_TOKEN_HERE',
  prefix: '!',
  filterWords: ['badword1', 'badword2'],
  banThreshold: 3,
  warningThreshold: 2,
  logChannelId: 'YOUR_LOG_CHANNEL_ID_HERE',
  databaseUrl: 'YOUR_MONGODB_CONNECTION_STRING_HERE'
};

module.exports = config;