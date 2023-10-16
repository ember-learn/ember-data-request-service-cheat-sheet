import { findRecord } from '@ember-data/json-api/request';
// import { findRecord } from '@ember-data/rest/request';
// import { findRecord } from '@ember-data/active-record/request';

const dynamicPathFor = (identifierType) => {
  const collectionName = camelize(pluralize(identifierType))
  return `collections/${collectionName}/records`;
};

const options = findRecord('post', '1', {
  resourcePath: dynamicPathFor('post'),
})
