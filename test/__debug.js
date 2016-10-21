const expect = require('chai').expect;
const log = require('../src/index');


describe('Debugger Test', () => {
  it('Should save to file', (done) => {
    expect(log.debug).to.not.equal(null);
    done();
  });
});
