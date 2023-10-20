import { findRecord } from '@ember-data/json-api/request';

const result = await this.store.request(findRecord('user', '1'));
const user = result.content.data
