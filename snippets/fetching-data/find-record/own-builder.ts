// Bring your own builder
import { buildBaseURL, buildQueryParams } from '@ember-data/request-utils'
import { pluralize } from 'ember-inflector';
import type { RequestSignature } from '@warp-drive/core-types/symbols';
import type { TypeFromInstance } from '@warp-drive/core-types/record';
import type { FindRecordOptions } from '@warp-drive/core-types/request';
import type { UrlOptions } from '@ember-data/request-utils'

type MyRequest<Type> = {
  url: string
  method: 'GET'
  headers: Headers
  op: 'findRecord'
  records: Array<{ type: TypeFromInstance<Type>, id: string }>;
  [RequestSignature]: Type
}

function findRecord<Type>(type: TypeFromInstance<Type>, id: string, options: FindRecordOptions<Type>): MyRequest<Type> {
  const identifier = { type, id };

  const urlOptions: Partial<UrlOptions> = {
    op: 'findRecord',
    identifier,
    resourcePath: pluralize(identifier.type),
  };

  const url = buildBaseURL(urlOptions);
  const headers = new Headers();
  headers.append('Accept', 'application/vnd.api+json');
  headers.append('Content-Type', 'application/vnd.api+json');

  const result = {
    url: options.include?.length
      ? `${url}?${buildQueryParams({ include: options.include }, options.urlParamsSettings)}`
      : url,
    method: 'GET',
    headers,
    op: 'findRecord',
    records: [identifier],
  };

  return result as MyRequest<Type>;
}

export default {
  findRecord
};


