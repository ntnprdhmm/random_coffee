const { filterHumanActiveUsers } = require('../filters');
const {
  basicUser,
  deletedUser,
  botUser,
  appUser,
} = require('../__fixtures__/users');

describe('filterHumanActiveUsers', () => {
  describe('given an empty list of users', () => {
    it('should return an empty list', () => {
      expect(filterHumanActiveUsers([])).toEqual([]);
    });
  });

  describe('given a list with non human users and deleted users', () => {
    it('should return an empty list', () => {
      expect(filterHumanActiveUsers([
        deletedUser,
        botUser,
        appUser,
      ])).toEqual([]);
    });
  });

  describe('given a list of human active users', () => {
    it('should return a new list with the same elements', () => {
      expect(filterHumanActiveUsers([
        basicUser,
      ])).toEqual([basicUser]);
    });
  });

  describe('given a list with a mix of non human users, deleted users, and human active users ', () => {
    it('should return a list with only the human active users', () => {
      expect(filterHumanActiveUsers([
        deletedUser,
        botUser,
        appUser,
        basicUser,
      ])).toEqual([basicUser]);
    });
  });
});
