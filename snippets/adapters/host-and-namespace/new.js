import { setBuildURLConfig } from '@ember-data/request-utils';
import config from 'my-app/config/environment';

setBuildURLConfig({
  host: config.api.host,
  namespace: config.api.namespace,
});
