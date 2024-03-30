(function () {
    /* Idente el siguiente codigo y de espacios */
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (name) {
            this.name = name;
        };
        Person.prototype.getAge = function () {
            return this.age;
        };
        Person.prototype.setAge = function (age) {
            this.age = age;
        };
        return Person;
    }());
    function weirdFunction() {
        var a = 5;
        var b = 333;
        var result = a + b;
        console.log('addition: ' + result);
        var newResult = result * 10;
        var array = [1, 2, 3, 4, 5];
        var mapResult = array.map(function (element) {
            return element * newResult;
        });
        console.log(mapResult);
    }
    weirdFunction();
})();
