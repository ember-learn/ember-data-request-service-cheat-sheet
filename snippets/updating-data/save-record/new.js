import { recordIdentifierFor } from '@ember-data/store';
import { updateRecord, serializePatch } from '@ember-data/json-api/request';

user.name = 'Chris';

const request = updateRecord(user);
request.body = JSON.stringify(
  serializePatch(
    this.store.cache,
    recordIdentifierFor(user)
  )
);

await this.store.request(request);
