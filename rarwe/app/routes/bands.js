import Route from '@ember/routing/route';
import EmberObject from "@ember/object";

const Song = EmberObject.extend({
  title: "",
  band: "",
  rating: 0
});

const Band = EmberObject.extend({
  name: '',
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
  songs: []
});

export default Route.extend({
  model: function() {

    let blackDog = Song.create({
      title: "Black Dog",
      band: "Led Zepplin",
      rating: 4
    });

    let yellowLedbetter = Song.create({
      title: "Yellow Ledbetter",
      band: "Pearl Jam",
      rating: 3
    });

    let pretender = Song.create({
      title: "The Pretender",
      band: "Foo Fighters",
      rating: 2
    });

    let daughter = Song.create({
      title: "Daughter",
      band: "Pearl Jam",
      rating: 2
    });

    console.log('bands.js: Returning Bands');
    return [
    Band.create({name: 'Led Zepplin', songs:[blackDog]}),
    Band.create({name: 'Pearl Jam', songs: [yellowLedbetter, daughter]}),
    Band.create({name: 'Foo Fighters', songs: [pretender]}),
    ];
  }
});
