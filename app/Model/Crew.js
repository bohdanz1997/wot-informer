'use strict'

const Lucid = use('Lucid')

class Crew extends Lucid {

  static get rules() {
    return {
      name: 'required'
    }
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Crew
