const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Data, { foreignKey: 'movie_id' });
    }
  }
  Movie.init({
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    genre: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    mark: DataTypes.STRING,
    img: DataTypes.STRING,
    time: DataTypes.STRING,
    link: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
