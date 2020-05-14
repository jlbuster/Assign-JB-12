const orm = require('../config/orm')

//create the code that will call the ORM functions using burger specific input for the ORM.

class Burger {
    constructor ({ name, devour = false }) {
        this.name = name
        this.devour = devour
    }

    static async findAll () {
        const rows = await orm.selectAll()
        return rows
    }

    async create () {
        const rows = await orm.insertOne(this.name, this.devour)
        this.id = rows.insertId
        return this
    }

    async update () {
        this.devour = fixBool(this.devour)
        await orm.updateOne(this.name, this.devour, this.id)
        return this
    }

    async save () {
        if (this.id) {
          return this.update()
        } else {
          return this.create()
        }
    }
}

function fixBool (prop) {
    if (prop === 'false') prop = false
    else if (prop === '0') prop = false
    else if (prop === 0) prop = false
    else if (prop === null) prop = false
    else if (prop === undefined) prop = false
    else prop = true
    return prop
}

module.exports = Burger