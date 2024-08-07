import { fillIn, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupIntl } from 'ember-intl/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | Homepage | en-US', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks, 'en-us');

  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/');
    await a11yAudit({
      rules: {
        'scrollable-region-focusable': {
          enabled: false,
        },
      },
    });

    assert.ok(true);
  });

  test('We set the correct lang attribute in <html> element', async function (assert) {
    await visit('/');

    assert
      .dom(document.querySelector('html'))
      .hasAttribute('lang', 'en-us', 'We set the correct lang attribute.');
  });

  test('We can change the site language', async function (assert) {
    await visit('/');

    assert
      .dom('#fetching-data')
      .hasText('Fetching Data', 'We see the site in English.');

    await fillIn('[data-test-field="Locale"]', 'pt-BR');

    assert
      .dom('#fetching-data')
      .hasText('Buscando Dados', 'We see the site in Portugese (Brazil).');

    await fillIn('[data-test-field="Locale"]', 'fr-FR');

    assert
      .dom('#fetching-data')
      .hasText('Récupération des données', 'We see the site in French.');
  });
});
