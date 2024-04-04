import { query } from '@ember-data/json-api/request';

await store.request(query('user'));
const users = store.peekAll('user')
