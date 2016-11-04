'use strict';

var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  ArticleService = require('../services/ArticleService'),
  articleService = new ArticleService(db.Article);

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res) {
  articleService
    .findAll()
    .then(function (articles) {
      console.log(articles);
      res.render('index', {
        title: 'Generator-Express MVC',
        articles: articles
      });
    });
});
