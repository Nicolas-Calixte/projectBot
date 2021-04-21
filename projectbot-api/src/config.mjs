export default {
  port: process.env.PORT,
  cors: {
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  },
  redis: {
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB,
  },
  knex: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
}
