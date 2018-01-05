import Ember from "ember";
import EmberObject from "@ember/object";

const Blog = EmberObject.extend({
  id: null,
  title: '',
  content: '',
  author: '',
  published:'',
});

export default Ember.Route.extend({
  model: function() {
    return Blog.create({title:'', content: '', })
  },
});