var BaseService = require('./BaseService');

function ArticleService(repository) {
    'use strict';

    //BaseService.apply(this, arguments);
    BaseService.apply(this, [repository]);
}

var articleServiceParent = BaseService.extendService(ArticleService); // jshint ignore:line


module.exports = ArticleService;