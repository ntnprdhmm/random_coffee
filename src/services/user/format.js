const { map } = require('lodash');

const reshape = (user) => {
  const { id, profile } = user;
  const { display_name: displayName } = profile;

  return { id, displayName };
};

const reshapeMany = (users) => map(users, reshape);

module.exports = {
  reshape,
  reshapeMany,
};
