import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return $.get('posts.json');
  // }

  // only this one works! :(
  model: function() {
    return [
    {"id": 1, "next": 2, "previous": 3,"title": "Looking Ahead: Space Missions for 2018", "published":"Jan 1, 2018", "author": "David Dickinson", "content": "Yesterday's launch of a Zenit-3F rocket from the Baikonur Cosmodrome in Kazakhstan carried AngoSat, Angola's first communications satellite — unremarkable but for marking the last of 85 scheduled launches in 2017.No new planetary missions departed Earth in 2017, but Juno continued to explore Jupiter, Cassini wrapped up its mission at Saturn in a dramatic Grand Finale, and the current U.S. administration pivoted the focus of NASA's human space exploration once again.", "votes": 0},
    {"id": 2, "next": 3, "previous": 1,"title": "Two Finalists for NASA’s New Frontiers", "published":"Dec 21, 2017", "author": "David Dickinson", "content": "What's on your Christmas wish list? NASA managers released theirs on Wednesday, announcing the finalists for what will become the space agency's fourth New Frontiers mission in the coming decade.NASA will either return to a comet first explored by the European Space Agency for an ambitious sample return — or send a nuclear-powered quadcopter to fly through the methane-choked skies of Saturn's moon Titan.", "votes": 0},
    {"id": 3, "next": 1, "previous": 2,"title": "Meet the Shy Side of the Local Group", "published":"Dec 13, 2017", "author": "Bob King", "content": "Long before the 'buy local' movement got underway we amateurs were galaxy shopping in the Local Group, a gravitationally-bound cluster of galaxies that includes three large spirals — the Milky Way, Andromeda Galaxy (M31), and Triangulum Galaxy (M33) — and some 50 dwarf galaxies spread across some 10 million light-years of space. The cluster's gravitational center lies between our galaxy and Andromeda, making its most distant member only about 4.5 million light-years away.That's barely a stone's throw when you consider that we routinely hunt down galaxies 50 million light-years away and farther. So the Local Group must be a cakewalk, right? Not exactly.", "votes": 0},
    ];
  }

  // This one works but the problem is once we return via promise, the next and previous buttons dont work :(
  // model: function() {
  //   return Ember.RSVP.hash({
  //     posts: [
  //     {"id": 1, "next": 2, "previous": 3,"title": "Looking Ahead: Space Missions for 2018", "published":"Jan 1, 2018", "author": "David Dickinson", "content": "Yesterday's launch of a Zenit-3F rocket from the Baikonur Cosmodrome in Kazakhstan carried AngoSat, Angola's first communications satellite — unremarkable but for marking the last of 85 scheduled launches in 2017.No new planetary missions departed Earth in 2017, but Juno continued to explore Jupiter, Cassini wrapped up its mission at Saturn in a dramatic Grand Finale, and the current U.S. administration pivoted the focus of NASA's human space exploration once again.", "votes": 0},
  //     {"id": 2, "next": 3, "previous": 1,"title": "Two Finalists for NASA’s New Frontiers", "published":"Dec 21, 2017", "author": "David Dickinson", "content": "What's on your Christmas wish list? NASA managers released theirs on Wednesday, announcing the finalists for what will become the space agency's fourth New Frontiers mission in the coming decade.NASA will either return to a comet first explored by the European Space Agency for an ambitious sample return — or send a nuclear-powered quadcopter to fly through the methane-choked skies of Saturn's moon Titan.", "votes": 0},
  //     {"id": 3, "next": 1, "previous": 2,"title": "Meet the Shy Side of the Local Group", "published":"Dec 13, 2017", "author": "Bob King", "content": "Long before the 'buy local' movement got underway we amateurs were galaxy shopping in the Local Group, a gravitationally-bound cluster of galaxies that includes three large spirals — the Milky Way, Andromeda Galaxy (M31), and Triangulum Galaxy (M33) — and some 50 dwarf galaxies spread across some 10 million light-years of space. The cluster's gravitational center lies between our galaxy and Andromeda, making its most distant member only about 4.5 million light-years away.That's barely a stone's throw when you consider that we routinely hunt down galaxies 50 million light-years away and farther. So the Local Group must be a cakewalk, right? Not exactly.", "votes": 0},
  //     ]
  //   })
  // }
});
