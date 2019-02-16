const { reshape, reshapeMany } = require('../format');
const {
  botUser,
  basicUser,
} = require('../__fixtures__/users');
const {
  basicUserReshaped,
  botUserReshaped,
} = require('../__fixtures__/reshapedUsers');

describe('reshape', () => {
  describe('given nil', () => {
    it('should throw an error', () => {
      expect(() => reshape(null)).toThrow();
      expect(() => reshape()).toThrow();
    });
  });

  describe('given a user', () => {
    it('should return the user reshaped', () => {
      expect(reshape(basicUser)).toEqual(basicUserReshaped);
    });
  });
});

describe('reshapeMany', () => {
  describe('given a list of users from Slack', () => {
    it('should return the users reshaped', () => {
      expect(reshapeMany([
        botUser,
        basicUser,
      ])).toEqual([
        botUserReshaped,
        basicUserReshaped,
      ]);
    });
  });
});
