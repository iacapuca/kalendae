import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import Datepicker from 'flowbite-datepicker/Datepicker';
import { service } from '@ember/service';

export default class TimeslotCreateComponent extends Component {
  @service store;
  @service router;
  @service notify;

  @tracked date;

  @action
  createDatepicker(el) {
    new Datepicker(el, {
      autohide: true,
    });
  }

  @action
  pickDate(e) {
    console.log(e.target.value);
  }

  @action
  onSubmit(e) {
    e.preventDefault();
    let newTimeslot = this.store.createRecord('timeslot', {
      activityName: this.activityName,
      date: new Date('2022-08-08'),
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
