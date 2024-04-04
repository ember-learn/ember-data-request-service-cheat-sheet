import { deleteRecord } from '@ember-data/json-api/request';

const user = store.peekRecord('user', '1');
store.deleteRecord(user);
await store.request(deleteRecord(user));
store.unloadRecord(user);
