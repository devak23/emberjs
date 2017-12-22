import Route from '@ember/routing/route';
import EmberObject from "@ember/object";

const Band = EmberObject.extend({
  name: ''
});

export default Route.extend({
  model: function() {

    return [
    Band.create({name: 'Led Zepplin'}),
    Band.create({name: 'Pearl Jam'}),
    Band.create({name: 'Foo FooFighters'}),
    ];
  }
});
