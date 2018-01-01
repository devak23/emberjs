import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('customers', function() {
    this.route('customer', { path: ":cust_id" });
  });
});

export default Router;
