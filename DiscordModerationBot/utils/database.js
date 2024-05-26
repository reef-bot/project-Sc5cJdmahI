// database.js

const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/discord_moderation_bot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Check for database connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Define moderation log schema
const moderationLogSchema = new mongoose.Schema({
  action: { type: String, required: true },
  user: { type: String, required: true },
  reason: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create moderation log model
const ModerationLog = mongoose.model('ModerationLog', moderationLogSchema);

module.exports = { ModerationLog };