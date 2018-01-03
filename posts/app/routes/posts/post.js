import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    let post = this.modelFor('posts').findBy('id', parseInt(params.post_id));
    return post;
  }
});