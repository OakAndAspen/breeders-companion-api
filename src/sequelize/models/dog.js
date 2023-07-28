const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    breed_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'breed',
        key: 'id'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    call_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    litter_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'litter',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'dog',
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
        name: "IDX_812C397DA8B4A30F",
        using: "BTREE",
        fields: [
          { name: "breed_id" },
        ]
      },
      {
        name: "IDX_812C397D7E3C61F9",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
      {
        name: "IDX_812C397D128AEA69",
        using: "BTREE",
        fields: [
          { name: "litter_id" },
        ]
      },
    ]
  });
};
