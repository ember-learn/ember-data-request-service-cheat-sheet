import { findRecord } from '@ember-data/json-api/request';

const result = await store.request(findRecord('user', '1'));
const user = result.content.data
