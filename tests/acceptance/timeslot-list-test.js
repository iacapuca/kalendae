import { module, test } from 'qunit';
import { visit, click, triggerEvent, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | timeslot list', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it should be able render a list with 10 timeslots ', async function (assert) {
    this.server.createList('timeslot', 10);

    await visit('/');

    assert.dom('[data-test-timeslot-card]').exists({ count: 10 });
  });
  test('it should be able to cancel a timeslot ', async function (assert) {
    this.server.createList('timeslot', 10);

    await visit('/');
    await triggerEvent('[data-test-timeslot-card="1"]', 'mouseenter');

    await click('[data-test-cancel-button="1"]');
    assert.dom('[data-test-canceledBadge]').hasText('CANCELED');
  });
  test('it should be able to delete a timeslot ', async function (assert) {
    this.server.createList('timeslot', 10);

    await visit('/');
    await triggerEvent('[data-test-timeslot-card="1"]', 'mouseenter');

    await click('[data-test-delete-button="1"]');
    assert.dom('[data-test-timeslot-card="1"]').doesNotExist();
    assert.dom('[data-test-timeslot-card]').exists({ count: 9 });
  });
  test('it should be able to edit a timeslot ', async function (assert) {
    this.server.createList('timeslot', 10);

    await visit('/');
    await triggerEvent('[data-test-timeslot-card="1"]', 'mouseenter');

    await click('[data-test-edit-button="1"]');
    await fillIn('[data-test-input-activity]', 'Modified Value');
    await click('[data-test-save-button="1"]');
    assert.dom('[data-test-activityName]').hasText('Modified Value');
  });
});
