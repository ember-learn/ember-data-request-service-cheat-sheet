import { query } from '@ember-data/json-api/request';

const result = await store.request(query('user'));
const users = result.content.data;
