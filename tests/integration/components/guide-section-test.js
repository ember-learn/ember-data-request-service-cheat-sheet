import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | guide-section', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us', {
    '': {
      title: 'Warning: Section title not found',
    },
  });

  test('can render when no arguments are passed', async function (assert) {
    await render(hbs`
      <GuideSection />
    `);

    assert
      .dom('[data-test-field="Section Title"]')
      .includesText('Warning: Section title not found');

    assert.dom('[data-test-subsection]').exists({ count: 0 });
  });

  test('should render', async function (assert) {
    this.section = {
      id: 'fetching-data',
      subsections: [
        {
          id: 'find-record',
          classicFiles: ['old.js', 'old.ts'],
          octaneFiles: ['new.js', 'new.ts', 'own-builder.ts'],
        },
        {
          id: 'find-all',
          classicFiles: ['old.js'],
          octaneFiles: ['new.js'],
        },
        {
          id: 'query',
          classicFiles: ['old.js'],
          octaneFiles: ['new.js'],
        },
        {
          id: 'query-record',
          classicFiles: ['old.js'],
          octaneFiles: ['new.js'],
        },
      ],
    };

    await render(hbs`
      <GuideSection
        @section={{this.section}}
      />
    `);

    assert
      .dom('[data-test-field="Section Title"]')
      .includesText('Fetching Data');

    assert.dom('[data-test-subsection]').exists({ count: 4 });
    assert.dom('[data-test-code-snippet]').exists({ count: 11 });
    assert.dom('[data-test-general-text]').exists({ count: 0 });
  });
});
