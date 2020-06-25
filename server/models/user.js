'use strict'

module.exports = (sequelize, DataTypes) => {
   const { Model } = sequelize.Sequelize
   class user extends Model {}

   user.init(
      {
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
               notNull: {
                msg: 'Email required!'
               },
               isEmail: {
                msg: 'Invalid email format!'
               },
               isUnique(value) {
                  return user
                     .findAll({
                        where: {
                          email: value
                        }
                     })
                     .then((results) => {
                        if (results.length != 0) {
                          throw new Error('Email already exist')
                        }
                     })
               }
            }
         },
         password: DataTypes.STRING
      },
      { hooks: {}, sequelize }
   )
   user.associate = function (models) {
      // associations can be defined here
   }
   return user
}