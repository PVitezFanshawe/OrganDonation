module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    link: DataTypes.STRING,
    img: DataTypes.STRING,
    logo: DataTypes.STRING,
    quote: DataTypes.STRING
  })
  return Story
}
