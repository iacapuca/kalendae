import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  activityName() {
    return faker.address.city();
  },

  date() {
    return faker.date.between('2021-10-05', '2021-10-10');
  },

  startTime() {
    return '11:00';
  },

  endTime() {
    return '13:00';
  },

  numMaxGuests() {
    return Math.floor(Math.random() * (24 - 5 + 1)) + 5;
  },
});
