import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import RSVP from 'rsvp';
import wait from "ember-test-helpers/wait";

const ITEMS = [{city: 'San Francisco'}, {city: 'portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Francisco'}];

moduleForComponent('list-filter', 'Integration | Component | list filter', {
  integration: true
});

test('should initially load all things', function(assert) {
  this.on('filterByCity', (val)=> {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve({ results: ITEMS});
    }
  });


  this.render(hbs`
    {{#list-filter filter=(action 'filterByCity') as |results|}}
    <ul>
    {{#each results as |item|}}
    <li class="city">
    {{item.city}}
    </li>
    {{/each}}
    </ul>
    {{/list-filter}}
    `);


  return wait().then(() => {
    assert.equal(this.$('.city').length, 3);
    assert.equal(this.$('.city').first().text().trim(), "San Francisco");
  });

});
