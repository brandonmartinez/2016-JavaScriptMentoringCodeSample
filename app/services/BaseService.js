'use strict';

function BaseService(repository) {
    this.repository = repository;
}

BaseService.prototype.findAll = function () {
    return this.repository.findAll();
};

BaseService.extendService = function (destination) {
    // Based on: http://oli.me.uk/2013/06/01/prototypical-inheritance-done-right/
    destination.prototype = Object.create(BaseService.prototype);
    destination.prototype.constructor = destination;
    // TODO: can we assign the base to a "parent" property instead of relying on the return?
    return BaseService.prototype;
};

module.exports = BaseService;