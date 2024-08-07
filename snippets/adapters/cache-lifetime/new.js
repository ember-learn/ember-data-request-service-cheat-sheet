import { CachePolicy } from '@ember-data/request-utils';
import BaseStore from 'ember-data/store';

export default class Store extends BaseStore {
  constructor(args) {
    super(args);
    // This is default configuration that would be set automatically be Ember Data
    this.lifetimes = new CachePolicy(this, {
      apiCacheSoftExpires: 30_000,
      apiCacheHardExpires: 60_000
    });
    // Or you can overwrite it with your own logic
    this.lifetimes = {
      isHardExpired(identifier) {
        const cached = this.store.cache.peekRequest(identifier);
        const twentyMinutesInMs = 20 * 60 * 1000;

        function isStale(headers, expirationTime) {
          const date = headers.get('date');

          if (!date) {
            return true;
          }

          const time = new Date(date).getTime();
          const now = Date.now();
          const deadline = time + expirationTime;

          const result = now > deadline;

          return result;
        }

        return !cached || !cached.response || isStale(cached.response.headers, twentyMinutesInMs);
      },

      isSoftExpired(identifier) {
        const { downlink, effectiveType } = navigator.connection;

        return downlink > 0 && effectiveType === '4g';
      }
    }
  }
}
