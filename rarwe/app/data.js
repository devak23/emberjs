import Song from "rarwe/models/song";
import Band from "rarwe/models/band";

export default {
  build: function() {
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

    return [
      Band.create({ name: 'Led Zepplin', songs: [blackDog] }),
      Band.create({ name: 'Pearl Jam', songs: [yellowLedbetter, daughter], description: 'Pearl Jam is an American rock band, formed in Seattle Washington in 1990' }),
      Band.create({ name: 'Foo Fighters', songs: [pretender] }),
    ];
  }
}
