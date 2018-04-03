const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const storiesController = require('./controllers/storiesController')
const companiesController = require('./controllers/companiesController')

module.exports = (app) => {
  app.post('/register',
    authenticationControllerPolicy.register,
    authenticationController.register)

  app.post('/login',
    authenticationController.login)

  app.get('/stories',
    storiesController.index)
  app.get('/stories/:storyId',
    storiesController.show)
  app.post('/stories',
    storiesController.post)

  app.get('/companies',
    companiesController.index)
  app.post('/companies',
    companiesController.post)
}
