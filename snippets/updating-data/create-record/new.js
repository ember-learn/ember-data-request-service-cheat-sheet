import { recordIdentifierFor } from '@ember-data/store';
import { createRecord, serializeResources } from '@ember-data/json-api/request';

const record = this.store.createRecord('user', {});
const request = createRecord(record);
request.body = JSON.stringify(
  serializeResources(
    this.store.cache,
    recordIdentifierFor(record)
  )
);

await this.store.request(request);
