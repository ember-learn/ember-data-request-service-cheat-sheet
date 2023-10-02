import { camelize } from '@ember/string';
import { pluralize } from 'ember-inflector';
import { recordIdentifierFor } from '@ember-data/store';

import {
  findRecord as restFindRecord,
  query as restQuery,
  createRecord as restCreateRecord,
  updateRecord as restUpdateRecord,
  deleteRecord as restDeleteRecord,
} from '@ember-data/rest/request';

const _customResourcePath = (identifierType) => {
  return `collections/${camelize(pluralize(identifierType))}/records`;
};

const findRecord = (identifierType, id, options) => {
  options = {
    ...options,
    resourcePath: _customResourcePath(identifierType),
  };
  return restFindRecord(identifierType, id, options);
};

const query = (identifierType, query, options) => {
  options = {
    ...options,
    resourcePath: _customResourcePath(identifierType),
  };
  return restQuery(identifierType, query, options);
};

const createRecord = (record, options) => {
  const identifier = recordIdentifierFor(record);
  options = {
    ...options,
    resourcePath: _customResourcePath(identifier.type),
  };
  return restCreateRecord(record, options);
};

const updateRecord = (record, options) => {
  const identifier = recordIdentifierFor(record);
  options = {
    ...options,
    resourcePath: _customResourcePath(identifier.type),
  };
  return restUpdateRecord(record, options);
};

const deleteRecord = (record, options) => {
  const identifier = recordIdentifierFor(record);
  options = {
    ...options,
    resourcePath: _customResourcePath(identifier.type),
  };
  return restDeleteRecord(record, options);
};

export { findRecord, query, createRecord, updateRecord, deleteRecord };
