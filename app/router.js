import EmberRouter from '@ember/routing/router';
import config from 'kalendae/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('timeslot', { path: '/timeslots/:id' });
  this.route('timeslots', function () {
    this.route('create');
  });
});
