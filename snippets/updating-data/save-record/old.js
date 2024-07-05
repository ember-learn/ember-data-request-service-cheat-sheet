const user = this.store.peekRecord('user', '1');

user.name = 'Chris';
await user.save();
