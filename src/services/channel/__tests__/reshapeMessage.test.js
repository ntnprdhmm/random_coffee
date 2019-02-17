const message = require('../__fixtures__/message');
const reshapedMessage = require('../__fixtures__/reshapedMessage');

const { reshapeMessage } = require('../format');

describe('reshapeMessage', () => {
  describe('given a message', () => {
    it('should return the reshaped message', () => {
      expect(reshapeMessage(message)).toEqual(reshapedMessage);
    });
  });
});
