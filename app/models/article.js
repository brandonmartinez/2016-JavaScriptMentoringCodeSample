'use strict';

module.exports = function (sequelize, DataTypes) {

    var Article = sequelize.define('Article', {
        title: DataTypes.STRING,
        url: DataTypes.STRING,
        text: DataTypes.STRING
    }, {
        classMethods: {
            associate: function () {
                // example on how to add relations
                // Article.hasMany(models.Comments);
            }
        }
    });

    return Article;
};