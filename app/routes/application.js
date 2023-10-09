import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      {
        id: 'fetching-data',
        subsections: [
          {
            id: 'find-record',
            classicFiles: ['old.js'],
            octaneFiles: ['new.js', 'replicate-store.js', 'own-builder.js'],
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
    ];
  }
}
