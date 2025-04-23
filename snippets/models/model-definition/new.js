import { withDefaults } from '@warp-drive/schema-record';

// Register schemas for all resources at once
store.schema.registerResources([
  // User schema
  withDefaults({
    type: 'user',
    fields: [
      { kind: 'field', name: 'firstName' },
      { kind: 'field', name: 'lastName' },
      {
        kind: 'derived',
        name: 'name',
        type: 'concat',
        options: { fields: ['firstName', 'lastName'], separator: ' ' }
      },
      {
        kind: 'hasMany',
        name: 'pets',
        type: 'pet',
        options: {
          async: false,
          inverse: 'owner',
          polymorphic: true,
          linksMode: true,
          resetOnRemoteUpdate: false,
        }
      }
    ]
  }),

  // Pet schema
  withDefaults({
    type: 'pet',
    fields: [
      { kind: 'field', name: 'name' },
      {
        kind: 'belongsTo',
        name: 'owner',
        type: 'user',
        options: {
          async: false,
          inverse: 'pets'
        }
      }
    ]
  }),

  // Dog schema (extends pet)
  withDefaults({
    type: 'dog',
    fields: [
      { kind: 'field', name: 'breed' },
      {
        kind: 'belongsTo',
        name: 'owner',
        type: 'user',
        options: {
          async: false,
          inverse: 'pets',
          as: 'pet'
        }
      }
    ]
  })
]);