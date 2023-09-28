import Controller from '@ember/controller';
import config from 'ember-data-request-service-cheat-sheet/config/environment';

export default class ApplicationController extends Controller {
  rootURL = config.rootURL.replace(/\/$/, '');
}
