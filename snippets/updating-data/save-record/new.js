import { updateRecord, serializePatch } from '@ember-data/json-api/request';

user.name = 'Chris';

const request = updateRecord(user);
request.body = JSON.stringify(
  serializePatch(
    store.cache,
    user
  )
);

await store.request(request);
