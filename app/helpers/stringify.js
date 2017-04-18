import Ember from 'ember';

export function stringify([obj]) {
  return JSON.stringify(obj, null, ' ');
}

export default Ember.Helper.helper(stringify);
