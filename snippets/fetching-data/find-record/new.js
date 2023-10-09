import { findRecord } from '@ember-data/json-api/request';

const { content: { data: user } } = await this.store.request(findRecord('user', '1'));
