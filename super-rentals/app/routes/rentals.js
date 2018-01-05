import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // this will retrieve data from 'api/rentals'
    // which has been defined in the mirage configuration
    // 'config.js'.
    return this.store.findAll('rental');

    // The store service is injected into all routes and
    // components in emberjs
  }
});
