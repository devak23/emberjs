import Ember from "ember";
import { isEmpty } from "@ember/utils";

export default Ember.Route.extend({
  afterModel: function(band) {
    isEmpty(band.get('description')) ? this.transitionTo('bands.band.songs') : this.transitionTo('bands.band.details');
  }
});
