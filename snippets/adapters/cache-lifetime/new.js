import { LifetimesService } from '@ember-data/request-utils';
import DataStore from '@ember-data/store';

export default class Store extends DataStore {
  constructor(args) {
    super(args);
    this.lifetimes = new LifetimesService(this, {
      apiCacheSoftExpires: 30_000,
      apiCacheHardExpires: 60_000
    });
  }
}
