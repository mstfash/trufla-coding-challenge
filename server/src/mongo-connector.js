import {} from 'dotenv/config';
import mongoose from 'mongoose';

export class MongoConnector {
  mongoConnection;

  constructor() {
    mongoose.Promise = global.Promise;
  }

  connect() {
    return new Promise((resolve, reject) => {
      const options = {
        keepAlive: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        connectTimeoutMS: 10000,
        useUnifiedTopology: true,
      };

      const { MONGODB_URI } = process.env;

      this.mongoConnection = mongoose.connection;
      console.log('MONGODB_URI', MONGODB_URI);
      mongoose
        .connect(MONGODB_URI, options)
        .then(() => {
          const indexOfA = MONGODB_URI.indexOf('@');
          const db =
            indexOfA !== -1
              ? MONGODB_URI.substring(0, 10) +
                '!_:_!' +
                MONGODB_URI.substring(indexOfA)
              : MONGODB_URI;
          console.log('MongoDB connected [%s]', db);
          resolve();
        })
        .catch(reject);
    });
  }

  disconnect() {
    return this.mongoConnection.close();
  }
}
