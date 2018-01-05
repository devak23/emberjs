import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      // this.set('isWide', !this.isWide);
      this.toggleProperty('isWide');
    }
  }
});
