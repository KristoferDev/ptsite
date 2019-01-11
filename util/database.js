const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
   MongoClient.connect('mongodb+srv://kristofer:NumW552QeQN6YNJv@developing-hqbfr.mongodb.net/ptsite?retryWrites=true', {useNewUrlParser: true}
   )
   .then(client => {
      console.log('Connected to DB')
      _db = client.db();
      callback();
   })
   .catch(err => {
      console.log(err)
      throw err;
   });
};

const getDb = () => {
   if(_db) {
      return _db;
   }
   console.log();
   throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
