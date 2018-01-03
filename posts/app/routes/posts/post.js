import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    let post = this.modelFor('posts').findBy('id', parseInt(params.post_id));
    return post;
  },
  actions: {
    previousPost: function() {
      let previous = this.controller.get('model').previous;
      this.transitionTo(`/posts/${previous}`);
    },
    nextPost: function() {
      let next = this.controller.get('model').next;
      this.transitionTo(`/posts/${next}`);
    }
  }
});