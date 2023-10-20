import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'my-app/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.api.host;
  namespace = config.api.namespace;
}
