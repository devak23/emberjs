import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { isEmpty } from "@ember/utils";

export default Controller.extend({
  title: '',
  isAddButtonDisabled: computed('title', function() {
    return isEmpty(this.get('title'));
  }),
  actions: {
    updateRating: function(params) {
      let song = params.item, rating = params.rating;
      song.set('rating', rating);
    }
  }
});
