const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('breeder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      allowNull: false
    },
    affix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facebook_followers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instagram_followers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tiktok: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tiktok_followers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    youtube: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    youtube_followers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'breeder',
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
        name: "IDX_73DA3D7A7E3C61F9",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
    ]
  });
};
