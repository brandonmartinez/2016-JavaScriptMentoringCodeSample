// Call "node app.js" from the command line.

// Our viewmodel to test state with

function OrderViewModel() {
    // Private Variables
    var self = this,
        orderCount;

    // Public Properties


    // Private 
    function getModifiedOrderCount() {
        return ++orderCount;
    }

    // Public Methods
    self.HowManyOrders = function () {
        var modifiedOrderCount = getModifiedOrderCount();
        return modifiedOrderCount;
    };

    self.PrintOrders = function () {
        var orders = self.HowManyOrders();
        console.log(orders);
    };

    self.Initialize = function (options) {
        var o = options || {};

        orderCount = options.orderCount || 592;
    };
}

var vm = new OrderViewModel(),
    vmOptions = {
        //orderCount: 50
    };

vm.Initialize(vmOptions);
vm.PrintOrders();
vm.PrintOrders();