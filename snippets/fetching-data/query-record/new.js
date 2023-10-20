import { query } from '@ember-data/json-api/request';

const result = await this.store.request(query('user', { ...params, limit: 1 }));
const user = result.content.data[0] ?? null;
