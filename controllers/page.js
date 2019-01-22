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
   Page.findById(2)
      .then(page => {
         res.render('page/ommig', {
            page: page,
            pageTitle: 'Joakim',
            path: '/ommig'
         })
      })
      .catch(err => {
         console.log('err', err);
      })
};

exports.getWorkout = (req, res , next) => {
   Page.findById(3)
      .then(page => {
         res.render('page/traning', {
            page: page,
            pageTitle: 'Joakim',
            path: '/workout'
         })
      })
      .catch(err => {
         console.log('err', err);
      })
};

exports.getContact = (req, res , next) => {
   Page.findById(4)
      .then(page => {
         res.render('page/kontakt', {
            page: page,
            pageTitle: 'Joakim',
            path: '/contact'
         })
      })
      .catch(err => {
         console.log('err', err);
      })
};