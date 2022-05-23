import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Timeslot | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('timeslot', {
      activityName: 'Test Activity',
      date: '2022-09-10',
      startTime: '11:00',
      endTime: '11:30',
      numMaxGuests: 5,
    });

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Timeslot::Card @timeslot={{this.timeslot}} />`);

    assert.dom('[data-test-activityName]').hasText(this.timeslot.activityName);
    assert.dom('[data-test-activityDate]').hasText(
      new Date(this.timeslot.date).toLocaleString(navigator.language, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
    assert
      .dom('[data-test-time]')
      .hasText(`${this.timeslot.startTime} - ${this.timeslot.endTime}`);
    assert
      .dom('[data-test-numMaxGuests]')
      .hasText(`${this.timeslot.numMaxGuests}`);
  });
});
