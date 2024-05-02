// File: my-app/utils/my-custom-rest-handler.js

import { normalizeResource } from 'my-app/utils/serialization';

const MyCustomRESTHandler = {
  async request(context, next) {
    const { content, request } = await next(context.request);
    // convert to JSON:API, because EmberData expect it by default (using the JSON:API Cache)
    return normalizeResource(content, request.store.schema);
  },
};

export default MyCustomRESTHandler;
