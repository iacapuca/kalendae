import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class IndexController extends Controller {
  @service store;
  @service notify;

  @action
  cancelTimeslot(t) {
    // TODO: Use peekrecord, the data is already in the ember-data
    this.store.findRecord('timeslot', t.id).then((timeslot) => {
      timeslot.status = 'CANCELED';
      timeslot
        .save()
        .then((timeslot) => {
          this.notify.success(`${timeslot.activityName} canceled with success`);
        })
        .catch((e) => {
          timeslot.rollbackAttributes();
          this.notify.error('Error: Unable to cancel timeslot');
        });
    });
  }

  @action
  deleteTimeslot(t) {
    const timeslot = this.store.peekRecord('timeslot', t.id);
    timeslot.deleteRecord();
    timeslot
      .save()
      .then((timeslot) => {
        this.notify.success(`${timeslot.activityName} deleted with success`);
      })
      .catch((e) => {
        timeslot.rollbackAttributes();
        this.notify.error('Error: Unable to delete timeslot');
      });
  }
}
