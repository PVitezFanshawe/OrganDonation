module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    link: DataTypes.STRING,
    img: DataTypes.STRING,
    logo: DataTypes.STRING,
    quote: DataTypes.STRING
  })
  return Company
}
