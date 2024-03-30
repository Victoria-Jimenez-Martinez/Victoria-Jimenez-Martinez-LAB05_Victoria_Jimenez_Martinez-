(function () {
    /* APLICA DRY */
    //EX - 1
    function calculateOperation(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    function calculateOperation1(a, b, c) {
        return calculateOperation(a, b, c);
    }
    console.log('Operation 1: ' + calculateOperation1(2, 4, 1));
    function calculateOperation2(x, y, z) {
        return calculateOperation(x, y, z);
    }
    console.log('Operation 2: ' + calculateOperation2(2, 4, 6));
    // EX - 2
    function calculateArea(shape) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        switch (shape) {
            case 'rectangle':
                return args[0] * args[1];
            case 'circle':
                return Math.PI * args[0] * args[0];
            default:
                throw new Error('Forma no válida especificada');
        }
    }
    function calculateRectangleArea(length, width) {
        return calculateArea('rectangle', length, width);
    }
    console.log('Rectangle Area: ' + calculateRectangleArea(4, 6));
    function calculateCircleArea(radius) {
        return calculateArea('circle', radius);
    }
    console.log('Circle Area: ' + calculateCircleArea(3));
    // EX - 3
    //No es necesario aumentar codigo en este ejercicio
    function validateEmail(email) {
        //...some code for validate here
        return false;
    }
    function validateUsername(username) {
        //...some code for validate here
        return false;
    }
    // Ex-3 an option to apply DRY
    function validateInput(input, type) {
        switch (type) {
            case 'email':
                var emailRegex = /@.*\./;
                return emailRegex.test(input);
            case 'username':
                var usernameRegex = /^[a-zA-Z0-9]+$/;
                return usernameRegex.test(input);
            default:
                throw new Error('Invalid input type specified');
        }
    }
    var email = 'correo@example.com';
    var invalidEmail = 'correo@ejemplo';
    var username = 'usuario123';
    var invalidUsername = 'usuario-123';
    console.log('Valid email: ' + validateInput(email, 'email'));
    console.log('Invalid email: ' + validateInput(invalidEmail, 'email'));
    console.log('Valid username: ' + validateInput(username, 'username'));
    console.log('Invalid username: ' + validateInput(invalidUsername, 'username'));
})();
