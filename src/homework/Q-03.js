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
        var A = 5;
        var B = 333;
        var RESULT = A + B;
        console.log('Addition: ' + RESULT);
        var NEW_RESULT = RESULT * 10;
        var ARRAY = [1, 2, 3, 4, 5];
        var MAP_RESULT = ARRAY.map(function (element) {
            return element * NEW_RESULT;
        });
        console.log(MAP_RESULT);
    }
    weirdFunction();
})();
