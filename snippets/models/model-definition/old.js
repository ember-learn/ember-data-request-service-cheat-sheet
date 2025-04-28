// Traditional EmberData Model Definition
import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @hasMany('pet', { polymorphic: true, inverse: 'owner' }) pets;

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Related models would be defined in separate files:

// export default class PetModel extends Model {
//   @attr('string') name;
//   @belongsTo('user', { inverse: 'pets' }) owner;
// }

// export default class DogModel extends PetModel {
//   @attr('string') breed;
// }