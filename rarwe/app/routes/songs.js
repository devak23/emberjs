import Route from "@ember/routing/route";
import EmberObject from '@ember/object';

const Song = EmberObject.extend({
  title: "",
  band: "",
  rating: 0
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
      band: "FooFighters",
      rating: 2
    });

    return [blackDog, yellowLedbetter, pretender];
  }
});
