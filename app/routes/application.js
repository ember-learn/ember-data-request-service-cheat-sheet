import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
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
