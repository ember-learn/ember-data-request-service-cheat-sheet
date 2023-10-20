const user = this.store.peekRecord('user', '1');
user.deleteRecord();
await user.save();
user.unloadRecord();
