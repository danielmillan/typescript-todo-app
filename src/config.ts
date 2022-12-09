export default {
  port: process.env.PORT || 9000,
  databaseString: process.env.DB_STRING || "mongodb://127.0.0.1:27017/app",
  jwtKey: process.env.JWT_KEY || "$f24tC1234tr#rf3",
};
