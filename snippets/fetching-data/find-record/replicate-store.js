// Replicate old on store methods
import { findRecord } from '@ember-data/json-api/request';
import BaseStore from 'ember-data/store'

export default class Store extends BaseStore {
  async findRecord(typeOrIdentifier, id, options) {
    const result = await this.request(findRecord(typeOrIdentifier, id, options));
    // but you might want to return whole result object, as it has meta, errors, links, etc.
    return result.content.data;
  }
}

// Somewhere in app
const user = await store.findRecord('user', '1')
