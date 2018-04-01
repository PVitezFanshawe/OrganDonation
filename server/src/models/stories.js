module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    name: DataTypes.STRING,
    quote: DataTypes.STRING,
    para: DataTypes.TEXT
  })
  return Story
}
