import { module, test } from 'qunit';
import { setupTest } from 'kalendae/tests/helpers';

module('Unit | Model | timeslot', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('timeslot', {});
    assert.ok(model);
  });
});
