const { map } = require('lodash');

const slackProvider = require('../../providers/slack');
const { reshapeChannel, reshapeMessage } = require('./format');

const createInstantMessageChannel = async (users) => {
  const userIds = map(users, 'id');
  const channel = await slackProvider.openInstantMessage(userIds);
  return reshapeChannel(channel);
};

const postMessage = async (channel, text) => {
  const message = await slackProvider.postMessage(channel.id, text);
  return reshapeMessage(message);
};

module.exports = {
  createInstantMessageChannel,
  postMessage,
};
