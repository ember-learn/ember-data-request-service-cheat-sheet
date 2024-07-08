import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | code-snippet', function (hooks) {
  setupRenderingTest(hooks);

  test('should render a JavaScript file', async function (assert) {
    await render(hbs`
      <CodeSnippet
        @fileName="fetching-data/find-record/new.js"
      />
    `);

    assert
      .dom('[data-test-code-snippet]')
      .hasText(
        "import { findRecord } from '@ember-data/json-api/request'; const result = await store.request(findRecord('user', '1')); const user = result.content.data"
      );
  });
});
