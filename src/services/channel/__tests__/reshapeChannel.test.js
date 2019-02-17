const channel = require('../__fixtures__/channel');
const reshapedChannel = require('../__fixtures__/reshapedChannel');

const { reshapeChannel } = require('../format');

describe('reshapeChannel', () => {
  describe('given a channel', () => {
    it('should return the reshaped channel', () => {
      expect(reshapeChannel(channel)).toEqual(reshapedChannel);
    });
  });
});
