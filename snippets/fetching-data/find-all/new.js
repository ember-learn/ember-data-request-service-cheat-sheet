import { query } from '@ember-data/json-api/request';

await this.store.request(query('user'));
const users = this.store.peekAll('user')
