'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todolists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.todolists.belongsTo(models.user, {foreignkey:'user_id'})
    }
  }
  //생성날짜, 수정날짜, 리스트 아이디?
  //todostatus 1:할일, 2:하고있는일, 3:한일
  todolists.init({
    list: DataTypes.STRING,
    todostatus:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'todolists',
  });
  return todolists;
};