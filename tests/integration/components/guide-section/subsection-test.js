import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | guide-section/subsection', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us', {
    '': {
      '': {
        title: 'Warning: Subsection title not found',
        description: 'Warning: Subsection description not found',
      },
    },
  });

  test('can render when no arguments are passed', async function (assert) {
    await render(hbs`
      <GuideSection::Subsection />
    `);

    assert
      .dom('[data-test-field="Subsection Title"]')
      .hasText('Warning: Subsection title not found');

    assert
      .dom('[data-test-field="Subsection Description"]')
      .hasText('Warning: Subsection description not found');

    const emberClassic = this.element.querySelector(
      '[data-test-ember-classic]'
    );

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 0 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 0 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
  });

  test('should render (1)', async function (assert) {
    this.sectionId = 'fetching-data';
    this.subsection = {
      id: 'find-record',
      classicFiles: ['old.js', 'old.ts'],
      octaneFiles: ['new.js', 'new.ts', 'own-builder.ts'],
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert.dom('[data-test-field="Subsection Title"]').hasText('findRecord');

    assert
      .dom('[data-test-field="Subsection Description"]')
      .includesText(
        'Examples here are shown for apps that use JSON:API. Apps using other paradigms should use the builders for REST or ActiveRecord if applicable, or author their own (or a new community library!) if not.'
      );

    const emberClassic = this.element.querySelector(
      '[data-test-ember-classic]'
    );

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 2 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 3 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
  });

  test('should render (2)', async function (assert) {
    this.sectionId = 'updating-data';
    this.subsection = {
      id: 'create-record',
      classicFiles: ['old.js'],
      octaneFiles: ['in-place-body.js', 'handler.js'],
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert.dom('[data-test-field="Subsection Title"]').hasText('createRecord');

    assert
      .dom('[data-test-field="Subsection Description"]')
      .includesText(
        'To create a new record using Ember Data, you should use createRecord request and attach "body" to it. Use serializeResources request utility when working with a JSON:API backend.'
      );

    const emberClassic = this.element.querySelector(
      '[data-test-ember-classic]'
    );

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 2 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
  });

  test('should render (3)', async function (assert) {
    this.sectionId = 'deleting-data';
    this.subsection = {
      id: 'delete-record',
      classicFiles: ['old.js', 'destroy.js'],
      octaneFiles: ['new.js'],
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert.dom('[data-test-field="Subsection Title"]').hasText('deleteRecord');

    assert
      .dom('[data-test-field="Subsection Description"]')
      .includesText(
        'To delete an existing record using Ember Data, you should use deleteRecord builder to issue the request.'
      );

    const emberClassic = this.element.querySelector(
      '[data-test-ember-classic]'
    );

    assert.dom('[data-test-code-snippet]', emberClassic).exists({ count: 2 });
    assert.dom('[data-test-general-text]', emberClassic).exists({ count: 0 });

    const emberOctane = this.element.querySelector('[data-test-ember-octane]');

    assert.dom('[data-test-code-snippet]', emberOctane).exists({ count: 1 });
    assert.dom('[data-test-general-text]', emberOctane).exists({ count: 0 });
    assert.dom('[data-test-general-text]', emberOctane).doesNotExist();
  });

  test('should render (4)', async function (assert) {
    this.sectionId = 'adapters';
    this.subsection = {
      id: 'host-and-namespace',
      classicFiles: ['old.js'],
      octaneFiles: ['new.js'],
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert
      .dom('[data-test-link="Edit Translation"]')
      .hasAttribute(
        'href',
        'https://github.com/ember-learn/ember-data-request-service-cheat-sheet/edit/main/translations/adapters/host-and-namespace/en-us.yaml'
      );
  });

  test('should render (5)', async function (assert) {
    this.set('intl.locale', 'pt-BR');

    this.sectionId = 'serializers';
    this.subsection = {
      id: 'general',
      classicFiles: ['old.js'],
      octaneFiles: ['utils.js', 'app-code.js', 'handler.js'],
    };

    await render(hbs`
      <GuideSection::Subsection
        @sectionId={{this.sectionId}}
        @subsection={{this.subsection}}
      />
    `);

    assert
      .dom('[data-test-link="Edit Translation"]')
      .hasAttribute(
        'href',
        'https://github.com/ember-learn/ember-data-request-service-cheat-sheet/edit/main/translations/serializers/general/pt-br.yaml'
      );
  });
});
