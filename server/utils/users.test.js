const expect = require('expect');

const {Users} = require('./Users');

describe('Users', () => {

  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: 1,
        name: 'MikeMikeMike',
        room: 'Fartknockers'
      },{
        id: 2,
        name: 'Sexy Lady',
        room: 'Spackle'
      },{
        id: 3,
        name: 'Laddy',
        room: 'Fartknockers'
      }
    ]
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id: 123,
      name: 'Fred',
      room: 'Room'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Fartknockers', () => {
    var userList = users.getUserList('Fartknockers');
    expect(userList).toEqual(['MikeMikeMike', 'Laddy']);
  });

  it('should return names for Spackle', () => {
    var userList = users.getUserList('Spackle');
    expect(userList).toEqual(['Sexy Lady']);
  });

  it('should remove a user', () => {
    var userId = 2;
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = 99;
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = 2;
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });
  it('should not find a user', () => {
    var userId = 99;
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

});
