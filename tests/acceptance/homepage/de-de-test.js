import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { setupIntl } from 'ember-intl/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | Homepage | de-DE', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks, 'de-de');

  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('We set the correct lang attribute in <html> element', async function (assert) {
    await visit('/');

    assert
      .dom(document.querySelector('html'))
      .hasAttribute('lang', 'de-de', 'We set the correct lang attribute.');
  });
});
