// Bring your own builder
import { buildBaseURL, buildQueryParams } from '@ember-data/request-utils'
import { pluralize } from 'ember-inflector';

async function findRecord(typeOrIdentifier, idOrOptions, maybeOptions) {
  const identifier = typeof typeOrIdentifier === 'string' ? { type: typeOrIdentifier, id } : typeOrIdentifier;
  const options = ((typeof typeOrIdentifier === 'string' ? maybeOptions : idOrOptions) || {});

  const urlOptions = {
    op: 'findRecord',
    identifier,
    resourcePath: pluralize(identifier.type),
  };

  const url = buildBaseURL(urlOptions);
  const headers = new Headers();
  headers.append('Accept', 'application/vnd.api+json');
  headers.append('Content-Type', 'application/vnd.api+json');

  return {
    url: options.include?.length
      ? `${url}?${buildQueryParams({ include: options.include }, options.urlParamsSettings)}`
      : url,
    method: 'GET',
    headers,
    op: 'findRecord',
    records: [identifier],
  };

}

export default {
  findRecord
};

// Somewhere in app
const fetchOptions = findRecord('user', '1', { include: 'friends' });
const result = await store.request(fetchOptions)
const user = result.content.data
// or using identifier for findRecord builder
const fetchOptions = findRecord({ type: 'user', id: '1' }, { include: 'friends' });
const result = await store.request(fetchOptions)
const user = result.content.data


