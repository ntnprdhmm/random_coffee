const axios = require('axios');
const { join } = require('lodash');

const headers = {
  'Authorization': `Bearer ${process.env.OAUTH_TOKEN}`,
};

const fetchUsers = async () => {
  const { data: response } = await axios({
    method: 'get',
    url: 'https://slack.com/api/users.list',
    headers,
  });

  if (!response.ok) {
    throw new Error(response.error);
  }

  return response.members;
};

const openInstantMessage = async (userIds) => {
  const { data: response } = await axios({
    method: 'post',
    url: 'https://slack.com/api/mpim.open',
    headers,
    data: {
      users: join(userIds, ','),
    }
  });

  if (!response.ok) {
    throw new Error(response.error);
  }

  return response.group;
};

const postMessage = async (channel, text) => {
  const { data: response } = await axios({
    method: 'post',
    url: 'https://slack.com/api/chat.postMessage',
    headers,
    data: {
      channel,
      text,
    }
  });

  if (!response.ok) {
    throw new Error(response.error);
  }

  return response.message;
};

module.exports = {
  fetchUsers,
  openInstantMessage,
  postMessage,
};
