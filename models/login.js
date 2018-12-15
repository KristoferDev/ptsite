const fs = require('fs');
const path = require('');

const p = path.join(
   path.dirname(process.mainModule.filename),
   'data',
   'login.json'
);

const getLoginFromFile = cb => {
   fs.readFile(p, (err, fileContent) => {
      if (err) {
         return cb([]);
      }
      cb(JSON.parse(fileContent));
   });
}

module.exports = class Login {
   constructor(email, password) {
      this.email = email;
      this.password = password;
   }

   static fetchData(cb) {
      getLoginFromFile(cb);
   }
}
