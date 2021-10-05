module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://sfsergim:Aclame.1234@timebox.yb27a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    test: 'mongodb+srv://sfsergim:Aclame.1234@timebox.yb27a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
