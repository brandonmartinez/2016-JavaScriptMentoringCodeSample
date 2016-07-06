// Declare "app" as a container to be used for view models and such (in the browser, this would be global or off of "window")
var app = {},
    // Require our "modules" to be used by our app (in the browser, these would just be <script src=""> tags without the exports)
    OrderViewModel = require('./lib/OrderViewModel.js'),
    UserViewModel = require('./lib/UserViewModel.js');

// Create a new instance of our view models to use
app.orderViewModel = new OrderViewModel();
app.userViewModel = new UserViewModel();

// Proceed as before
var vm = app.orderViewModel,
    vmOptions = {
        //orderCount: 50
    };

vm.initialize(vmOptions);
vm.printOrders();
vm.printOrders();
