const { filter } = require('lodash');

const filterHumanActiveUsers = (users) => filter(users, {
  'deleted': false,
  'is_bot': false,
  'is_app_user': false,
});

module.exports = {
  filterHumanActiveUsers
};
