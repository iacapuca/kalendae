import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CardFormComponent extends Component {
  @service store;
  @service router;
  @service notify;

  constructor() {
    super(...arguments);
    this.id = this.args.timeslot.id;
    this.activityName = this.args.timeslot.activityName;
    this.pickedDate = this.args.timeslot.formatedDate;
    this.startTime = this.args.timeslot.startTime;
    this.endTime = this.args.timeslot.endTime;
    this.numMaxGuests = this.args.timeslot.numMaxGuests;
  }

  @action
  editRecord(e) {
    e.preventDefault();
    let timeslot = this.store.peekRecord('timeslot', this.id);
    timeslot.activityName = this.activityName;
    timeslot.date = new Date(`${this.pickedDate} 00:00`);
    timeslot.startTime = this.startTime;
    timeslot.endTime = this.endTime;
    timeslot.numMaxGuests = parseInt(this.numMaxGuests);
    timeslot.save().then((t) => {
      this.notify.success(`${t.activityName} updated with success`);
      this.args.toggleEditMode();
    });
  }
}
