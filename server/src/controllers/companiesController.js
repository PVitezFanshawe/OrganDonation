const {Company} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const company = await Company.findAll({
        where: {}
      })
      res.send(company)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the stories.'
      })
    }
  },
  async post (req, res) {
    try {
      const company = await Company.create(req.body)
      res.send(company)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the story.'
      })
    }
  }
}
