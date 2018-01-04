import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-rentals');

test('should link to information about the company', function(assert) {

});


test('should link to contact information', function(assert) {

});

test('should list available rentals', function(assert) {

});

test('should filter the list of rentals by city', function(assert) {

});

test('should show details of a selected rental', function(assert) {

});


test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
