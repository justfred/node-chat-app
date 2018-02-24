const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', () => {
  it('should generate correct message object', () => {
    var from = 'fromtest';
    var text = 'texttest';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generate location message', () => {
  it('should generate correct location message object', () => {
    var from = 'fromtest';
    var latitude = 33.23;
    var longitude = -117.22;
    var url= `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
