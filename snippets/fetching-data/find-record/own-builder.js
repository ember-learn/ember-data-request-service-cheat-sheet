// Bring your own builder
import { findRecord as edFindRecord } from '@ember-data/json-api/request';

async function findRecord(typeOrIdentifier, id, options) {
  const result = await edFindRecord(typeOrIdentifier, id, options);

  return result.content.data;
}

export default {
  findRecord
};

// Somewhere in app
const user = await this.store.findRecord('user', '1');


