'use strict'

const Lucid = use('Lucid')

class Suspension extends Lucid {

    static get rules() {
      return {
        name: 'required',
        level: 'required',
        nation_id: 'required',
        weight: 'required',
        price: 'required',
        load_limit: 'required',
        traverse_speed: 'required'
      }
    }

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Suspension
