const authenticationController = require('./controllers/authenticationController')
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy')
const storiesController = require('./controllers/storiesController')

module.exports = (app) => {
  app.post('/register',
    authenticationControllerPolicy.register,
    authenticationController.register)

  app.post('/login',
    authenticationController.login)

  app.get('/stories',
    storiesController.index)
  app.post('/stories',
    storiesController.post)
}
