import Route from '@ember/routing/route';
import EmberObject from "@ember/object";
import DataBuilder from "rarwe/data";
import Band from "rarwe/models/band";

export default Route.extend({
  actions: {
    createBand: function() {
      let name = this.get('controller').get("name");
      let band = Band.create({ name: name});
      this.modelFor('bands').pushObject(band);
      this.get('controller').set('name','');
      this.transitionTo('bands.band.songs', band);
    }
  },
  model: function() {
    return DataBuilder.build();
  }
});
