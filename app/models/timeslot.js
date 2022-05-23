import Model, { attr } from '@ember-data/model';

export default class TimeslotModel extends Model {
  @attr activityName;
  @attr date;
  @attr startTime;
  @attr endTime;
  @attr numMaxGuests;
  @attr status;

  get formatedDate() {
    const [dateStr] = new Date(this.date).toISOString().split('T');
    return dateStr;
  }
}
