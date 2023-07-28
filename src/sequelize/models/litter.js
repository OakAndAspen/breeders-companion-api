const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('litter', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sire_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dog',
        key: 'id'
      }
    },
    dam_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dog',
        key: 'id'
      }
    },
    breeder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'breeder',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    whelping_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'litter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "IDX_4BF2030B79FDE3E6",
        using: "BTREE",
        fields: [
          { name: "sire_id" },
        ]
      },
      {
        name: "IDX_4BF2030BD6B981EE",
        using: "BTREE",
        fields: [
          { name: "dam_id" },
        ]
      },
      {
        name: "IDX_4BF2030B33C95BB1",
        using: "BTREE",
        fields: [
          { name: "breeder_id" },
        ]
      },
    ]
  });
};
