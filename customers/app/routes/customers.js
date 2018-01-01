import Ember from "ember";
import data from "customers/data";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      customers: data.customers
    });
  },
  setupController: function(controller, models) {
    return controller.setProperties(models);
  }
})