const user = this.store.peekRecord('user', '1');
await user.destroyRecord();
