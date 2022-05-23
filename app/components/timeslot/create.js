import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TimeslotCreateComponent extends Component {
  @service store;
  @service router;
  @service notify;

  timeslot = this.store.createRecord('timeslot');

  @action
  async onSubmit(e) {
    e.preventDefault();

    this.timeslot.activityName = this.activityName;
    this.timeslot.date = new Date(`${this.date} 00:00`);
    this.timeslot.startTime = this.startTime;
    this.timeslot.endTime = this.endTime;
    this.timeslot.numMaxGuests = this.numMaxGuests;

    if (await this.timeslot.validations.validate()) {
      this.timeslot.save().then((t) => {
        this.notify.success(`${t.activityName} created with success`);
        this.router.transitionTo('index');
      });
    }
  }
}
