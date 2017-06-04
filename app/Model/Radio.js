'use strict'

const Lucid = use('Lucid')

class Radio extends Lucid {

    static get rules() {
      return {
        name: 'required',
        level: 'required',
        nation_id: 'required',
        weight: 'required',
        price: 'required',
        signal_range: 'required'
      }
    }

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Radio
