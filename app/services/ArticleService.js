var BaseService = require('./BaseService');

function ArticleService(repository) {
    'use strict';

    //BaseService.apply(this, arguments);
    BaseService.apply(this, [repository]);
}

var articleServiceParent = BaseService.extendService(ArticleService); // jshint ignore:line

ArticleService.prototype.findAll = function () {
    return articleServiceParent.findAll.call(this).then(function (results) {
        // Stubbing in data since we don't have a database yet
        if (!results || results.length === 0) {
            results = [{
                title: 'Something',
                text: 'More something',
                url: 'my-new-article'
            }, {
                title: 'Something 2',
                text: 'More something something',
                url: 'my-new-article-again'
            }];
        }

        return results;
    });
};

module.exports = ArticleService;