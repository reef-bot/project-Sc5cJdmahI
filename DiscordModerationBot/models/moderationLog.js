// moderationLog.js

const mongoose = require('mongoose');

const moderationLogSchema = new mongoose.Schema({
  serverId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ModerationLog = mongoose.model('ModerationLog', moderationLogSchema);

module.exports = ModerationLog;