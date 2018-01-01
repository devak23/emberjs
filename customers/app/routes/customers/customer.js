import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('customer', params.cust_id);
  },

  setupController: function(controller, model) {
    controller.set('customer', model);
  }
})