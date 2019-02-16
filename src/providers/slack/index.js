const axios = require('axios');

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

module.exports = {
  fetchUsers,
};
