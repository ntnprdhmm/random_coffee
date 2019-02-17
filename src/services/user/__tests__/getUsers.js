const slackProvider = require('../../../providers/slack');
jest.mock('../../../providers/slack');

const { getUsers } = require('../index');
const {
  botUser,
  basicUser,
} = require('../__fixtures__/users');
const {
  basicUserReshaped,
} = require('../__fixtures__/reshapedUsers');

describe('getUsers', () => {
  describe('given that the slack provider throw an error', () => {
    slackProvider.fetchUsers.mockImplementationOnce(() => Promise.reject(
      'error from test',
    ));

    it('should recover by returning an empty list', async () => {
      const users = await getUsers();
      expect(users).toEqual([]);
    });
  });

  describe('given that the slack provider return a list of users', () => {
    describe('and that this list is empty', () => {
      slackProvider.fetchUsers.mockImplementationOnce(() => Promise.resolve([]));

      it('should return an empty list', async () => {
        const users = await getUsers();
        expect(users).toEqual([]);
      });
    });

    describe('and that this list not empty', () => {
      slackProvider.fetchUsers.mockImplementationOnce(() => Promise.resolve([
        botUser,
        basicUser,
      ]));

      it('should return an empty list', async () => {
        const users = await getUsers();
        expect(users).toEqual([basicUserReshaped]);
      });
    });
  });
});
