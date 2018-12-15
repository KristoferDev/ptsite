exports.getHome = (req, res , next) => {
   res.render('page/', {
      pageTitle: 'Joakim',
      path: '/'
   });
};

exports.getAbout = (req, res , next) => {
   res.render('page/ommig', {
      pageTitle: 'Joakim',
      path: '/about'
   });
};

exports.getWorkout = (req, res , next) => {
   res.render('page/traning', {
      pageTitle: 'Joakim',
      path: '/workout'
   });
};

exports.getContact = (req, res , next) => {
   res.render('page/kontakt', {
      pageTitle: 'Joakim',
      path: '/contact'
   });
};