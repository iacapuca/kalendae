import Model, { attr } from '@ember-data/model';
import YupValidations from 'kalendae/validations/yup';
import { string, date } from 'yup';

export default class TimeslotModel extends Model {
  validations = new YupValidations(this, {
    activityName: string().required(),
    startTime: string()
      .required()
      .test(
        'start_time_test',
        'Start time must be before end time',
        (v) => v < this.endTime
      ),
    endTime: string()
      .required()
      .test(
        'end_time_test',
        'End time must be after start time',
        (v) => v > this.startTime
      ),
    date: date()
      .required()
      .test(
        'date_test',
        'Date cant be in the past',
        (v) => v.getTime() >= new Date().getTime()
      ),
  });
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
