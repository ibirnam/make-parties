'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rsvp = sequelize.define('Rsvp', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
    // EventId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Event',
    //     key: 'id',
    //   }
    // }
    }, {});
  Rsvp.associate = function (models) {
    Rsvp.belongsTo(models.Event); // EventId
  };
  return Rsvp;
};