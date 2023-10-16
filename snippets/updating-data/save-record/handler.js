// Create handler for serialization of any record
import { recordIdentifierFor } from '@ember-data/store';
import { serializeResources } from '@ember-data/json-api/request';

const updatesHandler = {
  MUTATION_OPS = new Set(['createRecord', 'updateRecord']);
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
      body: serializeResources(
        store.cache,
        recordIdentifierFor(data.record)
      )
    });
    return next(newRequestParams);
  }
}

// Add this handler to your request manager
export default class extends RequestManager {
  constructor(args) {
    super(args);
    this.use([updatesHandler, Fetch]);
    this.useCache(CacheHandler);
  }
}

// then in your app just use updateRecord builder and let handler care about serialization
import { updateRecord } from '@ember-data/json-api/request';

const request = updateRecord(record);
await this.store.request(request);

// or overwrite body if you need to, handler will not touch it
import { updateRecord } from '@ember-data/rest/request';

const record = this.store.updateRecord('feature', { name: "rest-enabled" });
const request = updateRecord(record);
// For some reason your endpoint for 'features' is not JSON:API compliant
request.body = JSON.stringify({ name: 'rest-enabled' })
