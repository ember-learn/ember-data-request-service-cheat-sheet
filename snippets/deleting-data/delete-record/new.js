import { deleteRecord } from '@ember-data/json-api/request';

const user = this.store.peekRecord('user', '1');
this.store.deleteRecord(user);
await this.store.request(deleteRecord(user));
this.store.unloadRecord(user);
