import { setApplication } from '@ember/test-helpers';
import Application from 'ember-data-request-service-cheat-sheet/app';
import config from 'ember-data-request-service-cheat-sheet/config/environment';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
