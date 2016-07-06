/*global app */

function OrderViewModel() {
    'use strict';
    // Private Variables
    var self = this, orderCount, initialized = false;

    // Public Properties


    // Private 
    function getModifiedOrderCount() {
        orderCount += 1;
        return orderCount;
    }

    function howManyOrders() {
        var modifiedOrderCount = getModifiedOrderCount();
        return modifiedOrderCount;
    }

    // Public Methods
    self.howManyOrders = howManyOrders;

    self.printOrders = function () {
        var orders = howManyOrders();
        console.log(orders);
    };

    self.initialize = function (options) {
        if (!initialized) {
            var o = options || {};

            orderCount = o.orderCount || 592;
        }

        initialized = true;
    };
}

// Node specific to export our function to be included through require
module.exports = OrderViewModel;