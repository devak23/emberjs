import Route from "@ember/routing/route";
import Song from "rarwe/models/song";

export default Route.extend({
  actions: {
    createSong: function() {
      let controller = this.get('controller');
      let band = this.modelFor('bands.band');
      let title = controller.get('title');
      let song = Song.create({ title: title, band: band });
      band.get('songs').pushObject(song);
      controller.set('title');
    },
  },
  model: function() {
    return this.modelFor("bands.band");
  },
})