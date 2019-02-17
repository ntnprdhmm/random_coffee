const { shuffle, slice } = require('lodash');

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

const getRandomUsers = async (numberToPick = 3) => {
  const users = await getUsers();

  if (users.length <= numberToPick) {
    return users;
  }

  const shuffledUsers = shuffle(users);
  return slice(shuffledUsers, 0, numberToPick);
};

module.exports = {
  get: getUsers,
  getRandom: getRandomUsers,
};
