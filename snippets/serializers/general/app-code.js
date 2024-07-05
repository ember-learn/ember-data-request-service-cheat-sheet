// File: my-app/components/my-component.js

import { serializeResource } from "my-app/utils/serialization";
import { recordIdentifierFor } from '@ember-data/store';
import { createRecord } from "@ember-data/json-api/request"

// ...
let record = store.createRecord('blog-post', {
  title: "My first blog post",
  body: "This is the body of my blog post",
  createdAt: new Date(),
  user: currentUser,
});

const request = createRecord(record);
request.body = JSON.stringify(
  serializeResource(
    store.cache,
    recordIdentifierFor(record)
  )
);

await this.store.request(request);
