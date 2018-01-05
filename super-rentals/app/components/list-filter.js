import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value:'',
  init() {
    this._super(...arguments);
    // the filter key that has been assigned a function in the component list-filter component
    // in the rentals.hbs.
    this.get('filter')('').then(results => this.set('results', results));

    // to implement the filter function to do actual filter of rentals by city, look into the
    // controller: rentals.js
  },
  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then(filterResults => this.set('results', filterResults));
    }
  }
});
