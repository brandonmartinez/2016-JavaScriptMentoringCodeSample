/*global app */

function UserViewModel() {
    'use strict';
    // Private Variables
    var self = this,
        settings;

    // Public Properties


    // Private 
    

    // Public Methods

    self.initialize = function (options) {
        settings = options || {};
    };
}


// Node specific to export our function to be included through require
module.exports = UserViewModel;