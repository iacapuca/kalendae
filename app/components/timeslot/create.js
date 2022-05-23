import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TimeslotCreateComponent extends Component {
  @service store;
  @service router;
  @service notify;

  @action
  onSubmit(e) {
    e.preventDefault();
    let newTimeslot = this.store.createRecord('timeslot', {
      activityName: this.activityName,
      date: new Date(`${this.date} 00:00`),
      startTime: this.startTime,
      endTime: this.endTime,
      numMaxGuests: this.numMaxGuests,
    });
    newTimeslot.save().then((t) => {
      this.notify.success(`${t.activityName} created with success`);
      this.router.transitionTo('index');
    });
  }
}
