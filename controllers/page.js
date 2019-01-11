const Page = require('../models/page');

exports.getHome = (req, res , next) => {
   Page.findById(1)
      .then(page => {
         console.log('page', page);
         res.render('page/', {
            page: page,
            pageTitle: 'Joakim',
            path: '/'
         })
      })
      .catch(err => {
         console.log('err', err);
      })
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