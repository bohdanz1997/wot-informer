'use strict'

const Lucid = use('Lucid')

class Crew extends Lucid {

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Crew
