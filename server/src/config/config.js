module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'organdonation',
    user: process.env.DB_USER || 'organdonation',
    password: process.env.DB_PASS || 'organdonation',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './organdonation.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.eventNames.JTW_SECRET || 'secret'
  }
}
