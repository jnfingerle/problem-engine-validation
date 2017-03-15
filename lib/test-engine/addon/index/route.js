import Ember from 'ember';
import {buildValidations, validator} from 'ember-cp-validations';

const Validations = buildValidations({
  a: validator('presence', true)
});

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.extend(Validations).create({
      a: 1
    });
  }
});
