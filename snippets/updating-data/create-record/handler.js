// Create handler for serialization of any record
import { recordIdentifierFor } from '@ember-data/store';
import { serializeResources } from '@ember-data/json-api/request';

const updatesHandler = {
  MUTATION_OPS: new Set(['createRecord', 'updateRecord']),

  request(context, next) {
    if (!MUTATION_OPS.has(context.request.op)) {
      // Not a mutation, do nothing
      return next(context.request);
    }

    if (context.request.body) {
      // body is already set, do nothing
      return next(context.request);
    }

    const { data, store } = context.request;
    const newRequestParams = Object.assign({}, context.request, {
      body: JSON.stringify(
        serializeResources(
          store.cache,
          data.record
        ))
    });
    return next(newRequestParams);
  }
}

// Add this handler to your request manager
export default class extends RequestManager {
  constructor(args) {
    super(args);
    this.use([updatesHandler, Fetch]);
  }
}

// then in your app just use createRecord builder and let handler care about serialization
import { createRecord } from '@ember-data/json-api/request';

const requestObj = createRecord(record);
await store.request(requestObj);

// or overwrite body if you need to, handler will not touch it
import { createRecord } from '@ember-data/json-api/request';

const record = store.createRecord('feature', { name: "rest-enabled" });
const request = createRecord(record);
// For some reason your endpoint for 'features' is not JSON:API compliant
request.body = JSON.stringify({ name: 'rest-enabled' })
