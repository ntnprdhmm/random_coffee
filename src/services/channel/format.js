const reshapeChannel = (channel) => {
  const { id, members: userIds } = channel;

  return { id, userIds };
};

const reshapeMessage = (message) => {
  const { text, ts: timestamp, bot_id: botId } = message;

  return { text, timestamp, botId };
};

module.exports = {
  reshapeChannel,
  reshapeMessage,
};
