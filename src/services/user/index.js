const slackProvider = require('../../providers/slack');
const { filterHumanActiveUsers } = require('./filters');
const { reshapeMany } = require('./format');

const getUsers = async () => {
  try {
    const users = await slackProvider.fetchUsers();
    const humanActiveUsers = filterHumanActiveUsers(users);
    const reshapedUsers = reshapeMany(humanActiveUsers);
    return reshapedUsers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = {
  get: getUsers,
};
