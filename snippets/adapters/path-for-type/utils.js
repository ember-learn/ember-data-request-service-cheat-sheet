// utils/my-backend-request-builders.js
import { camelize } from '@ember/string';
import { pluralize } from 'ember-inflector';
import { buildBaseURL, buildQueryParams } from '@ember-data/request-utils';

const _customResourcePath = (identifierType) => {
  return `collections/${camelize(pluralize(identifierType))}/records`;
};

async function findRecord(typeOrIdentifier, idOrOptions, maybeOptions) {
  const identifier = typeof typeOrIdentifier === 'string' ? { type: typeOrIdentifier, id } : typeOrIdentifier;
  const options = ((typeof typeOrIdentifier === 'string' ? maybeOptions : idOrOptions) || {});

  const urlOptions = {
    op: 'findRecord',
    identifier,
    resourcePath: _customResourcePath(identifier.type),
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

