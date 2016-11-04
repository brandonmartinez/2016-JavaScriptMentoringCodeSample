'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'javascript-node-sample'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/javascript-node-sample-development',
    storage: rootPath + '/data/javascript-node-sample-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'javascript-node-sample'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/javascript-node-sample-test',
    storage: rootPath + '/data/javascript-node-sample-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'javascript-node-sample'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/javascript-node-sample-production',
    storage: rootPath + 'data/javascript-node-sample-production'
  }
};

module.exports = config[env];
