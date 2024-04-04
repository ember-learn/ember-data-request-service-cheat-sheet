const user = store.peekRecord('user', '1');
await user.destroyRecord();
