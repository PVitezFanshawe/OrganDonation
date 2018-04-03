const {Story} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const story = await Story.findAll({
        where: {}
      })
      res.send(story)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the stories.'
      })
    }
  },
  async show (req, res) {
    try {
      const story = await Story.findById(req.params.stroyId)
      res.send(story)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the stories.'
      })
    }
  },
  async post (req, res) {
    try {
      const story = await Story.create(req.body)
      res.send(story)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the story.'
      })
    }
  }
}
