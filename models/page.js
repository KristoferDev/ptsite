const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Page {
   constructor(header, starttext, admin_id) {
      this.header = header;
      this.starttext = starttext;
      this.admin_id = parseInt(admin_id);
      console.log(admin_id);
   }
   save() {
      const db = getDb();
      return db.collection('pages')
      .updateOne({admin_id: this.admin_id}, {$set: {header: this.header, starttext: this.starttext}})
      .then(result => {
         //console.log(result);
      })
      .catch(err => {
         console.log(err);
      });
   }

   static findById() {
      const db = getDb();
      return db.collection('pages')
         .find({admin_id : 1})
         .next()
         .then(page => {
            console.log('*page*', page);
            return page;
         })
         .catch(err => {
            console.log(err)
         });
   }
}

module.exports = Page;
