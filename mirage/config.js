export default function () {
  this.namespace = '/api';

  this.get('/timeslots');
  this.get('/timeslots/:id');
  this.post('/timeslots');
  this.patch('/timeslots/:id');
  this.del('/timeslots/:id');

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
