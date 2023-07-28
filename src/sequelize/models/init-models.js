var DataTypes = require("sequelize").DataTypes;
var _breed = require("./breed");
var _breeder = require("./breeder");
var _dog = require("./dog");
var _litter = require("./litter");
var _person = require("./person");

function initModels(sequelize) {
  var breed = _breed(sequelize, DataTypes);
  var breeder = _breeder(sequelize, DataTypes);
  var dog = _dog(sequelize, DataTypes);
  var litter = _litter(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);

  dog.belongsTo(breed, { as: "breed", foreignKey: "breed_id"});
  breed.hasMany(dog, { as: "dogs", foreignKey: "breed_id"});
  litter.belongsTo(breeder, { as: "breeder", foreignKey: "breeder_id"});
  breeder.hasMany(litter, { as: "litters", foreignKey: "breeder_id"});
  litter.belongsTo(dog, { as: "sire", foreignKey: "sire_id"});
  dog.hasMany(litter, { as: "sire_litters", foreignKey: "sire_id"});
  litter.belongsTo(dog, { as: "dam", foreignKey: "dam_id"});
  dog.hasMany(litter, { as: "dam_litters", foreignKey: "dam_id"});
  dog.belongsTo(litter, { as: "litter", foreignKey: "litter_id"});
  litter.hasMany(dog, { as: "dogs", foreignKey: "litter_id"});
  breeder.belongsTo(person, { as: "owner", foreignKey: "owner_id"});
  person.hasMany(breeder, { as: "breeders", foreignKey: "owner_id"});
  dog.belongsTo(person, { as: "owner", foreignKey: "owner_id"});
  person.hasMany(dog, { as: "dogs", foreignKey: "owner_id"});

  return {
    breed,
    breeder,
    dog,
    litter,
    person,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
