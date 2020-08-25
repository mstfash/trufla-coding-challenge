require('@babel/register');

const db = require('./seed');

module.exports = {
  seed: db.initDb,
  drop: db.resetDb,
};
