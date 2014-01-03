/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  //migrate: 'safe',
  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    firstName: 'STRING',
    lastName: 'STRING',
    age: {
      type: 'INTEGER',
      max: 150,
      required: true
    },
    password: 'STRING'
  }

};
