exports.getLogin = (req, res , next) => {
   res.render('admin/login', {
      pageTitle: 'Login',
      path: '/admin/login',
      formCSS: true
   });
};

exports.postAddProduct = (req, res, next) => {
   const email = req.body.email;
   const password = req.body.password;
   res.redirect('/admin/home');
};