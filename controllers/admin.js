const User = require('../models/user');
const Page = require('../models/page');

exports.getLogin = (req, res , next) => {
   res.render('admin/login', {
      pageTitle: 'Login',
      path: '/admin/login',
      formCSS: true
   });
};

exports.getAdmin = (req, res, next) => {
   page.find()
      .then(page => {
         res.render('admin/admin', {
            pageTitle: 'Admin',
            path: '/admin/admin',
            formCSS: true
         });
      })
      .catch(err => {
         console.log(err);
      })
};

exports.postAdmin = (req, res, next) => {
   const header = req.body.header;
   const starttext = req.body.text;
   const admin_id = req.body.admin_id;
   console.log(header, starttext, admin_id);
   const page = new Page(header, starttext, admin_id);
   page
      .save()
      .then(result => {
         res.redirect('/admin/admin');
      })
      .catch(err => {
         console.log(err);
      });
};

exports.getSignup = (req, res, next) => {
   res.render('admin/signup', {
      pageTitle: 'Sign up',
      path: '/admin/signup',
      formCSS: true
   });
};

exports.postSignup = (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;
   const user = new User(email, password);
   user
      .save()
      .then(result => {
         console.log(result);
         console.log('Created Product');
         res.redirect('/admin/login')
      })
      .catch(err => {
         console.log(err);
      });
};

// exports.postAddProduct = (req, res, next) => {
//    //const email = req.body.email;
//    //const password = req.body.password;
//    res.redirect('/admin/home');
// };