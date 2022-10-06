let Sequelize = require('sequelize')
let db = require('../config/db')
const Comment = db.define('comment', {
    contenue: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }

})
module.exports = Comment;

