import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      {
        id: 'fetching-data',
        subsections: [
          {
            id: 'find-record',
            classicFiles: ['old.js', 'old.ts'],
            octaneFiles: ['new.js', 'new.ts', 'own-builder.ts'],
          },
          {
            id: 'find-all',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js'],
          },
          {
            id: 'query',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js'],
          },
          {
            id: 'query-record',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js'],
          },
        ],
      },
      {
        id: 'updating-data',
        subsections: [
          {
            id: 'create-record',
            classicFiles: ['old.js'],
            octaneFiles: ['in-place-body.js', 'handler.js'],
          },
          {
            id: 'save-record',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js', 'handler.js'],
          },
        ],
      },
      {
        id: 'deleting-data',
        subsections: [
          {
            id: 'delete-record',
            classicFiles: ['old.js', 'destroy.js'],
            octaneFiles: ['new.js'],
          },
        ],
      },
      {
        id: 'adapters',
        subsections: [
          {
            id: 'general',
          },
          {
            id: 'host-and-namespace',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js'],
          },
          {
            id: 'path-for-type',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js', 'utils.js'],
          },
          {
            id: 'cache-lifetime',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js'],
          },
        ],
      },
      {
        id: 'serializers',
        subsections: [
          {
            id: 'general',
            classicFiles: ['old.js'],
            octaneFiles: ['utils.js', 'app-code.js', 'handler.js'],
          },
        ],
      },
      {
        id: 'models',
        subsections: [
          {
            id: 'model-definition',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js'],
          },
        ],
      },
    ];
  }
}
