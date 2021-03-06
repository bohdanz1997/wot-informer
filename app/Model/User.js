'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  static boot () {
    super.boot()
    
    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  static get loginRules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  static get registerRules () {
    return {
      username: 'required',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

}

module.exports = User
