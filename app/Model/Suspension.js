'use strict'

const Lucid = use('Lucid')

class Suspension extends Lucid {

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Suspension
