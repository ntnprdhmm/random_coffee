const slackProvider = require('../../../providers/slack');
jest.mock('../../../providers/slack');

const { getRandomUsers } = require('../index');
const { otherBasicUsersReshaped } = require('../__fixtures__/reshapedUsers');
const { otherBasicUsers } = require('../__fixtures__/users');

describe('getRandomUsers', () => {
  describe('given that slack respond with less users that the number asked', () => {
    slackProvider.fetchUsers.mockImplementationOnce(() => Promise.resolve([
      otherBasicUsers[0],
      otherBasicUsers[1],
    ]));

    it('should return all the users from the slack response', async () => {
      const users = await getRandomUsers(3);
      expect(users).toHaveLength(2);
      expect(users).toContainEqual(otherBasicUsersReshaped[0]);
      expect(users).toContainEqual(otherBasicUsersReshaped[1]);
    });
  });

  describe('given that slack respond with more users that the number asked', () => {
    slackProvider.fetchUsers.mockImplementationOnce(() => Promise.resolve(
      otherBasicUsers,
    ));

    it('should return some users from the slack response', async () => {
      const users = await getRandomUsers(2);
      expect(users).toHaveLength(2);
      expect(otherBasicUsersReshaped).toContainEqual(users[0]);
      expect(otherBasicUsersReshaped).toContainEqual(users[1]);
    });
  });
});
