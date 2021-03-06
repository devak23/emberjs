import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('bands').findBy('slug', params.slug);
  },
});
