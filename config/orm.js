const connection = require('./connection')

const orm = {
//three methods that will execute the sql commands in the controllers
    selectAll: async function () {
        const [rows] = await connection.query('SELECT * FROM burgers;')
        return rows
    },

    insertOne: async function (name1, devour1) {
        const [rows] = await connection.query('INSERT INTO burgers (name, devour) VALUES (?, ?)', 
        [name1, devour1]
        )
        return rows
    },
    
    updateOne: async function (name1, devour1, id1) {
        const [rows] = await connection.query('UPDATE burgers SET ? WHERE id = ?', 
        [{ name: name1, devour: devour1 }, id1]
        )
        return rows
    }
}

module.exports = orm