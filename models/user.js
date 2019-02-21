const getDb = require('../util/database').getDb;

class User {
   constructor(email, password) {
      this.email = email;
      this.password = password;
   }
   static findAll() {
      const db = getDb();
      return db.collection('pages')
      .find()
      .next()
      .then(page => {
         return page;
      })
      .catch(err => {
         console.log(err);
      });
   }

   save() {
      const db = getDb();
      return db.collection('pages')
      .insertOne(this)
      .then(result => {
         console.log(result);
      })
      .catch(err => {
         console.log(err);
      });
   }
}

module.exports = User;
