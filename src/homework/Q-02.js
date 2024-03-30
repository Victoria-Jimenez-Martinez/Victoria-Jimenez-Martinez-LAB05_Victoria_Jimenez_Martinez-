(function () {
    /* Haz uso de nomenclaturas correctas en la variables
       mantener los nombres dados
    */
    var WordToWord = /** @class */ (function () {
        function WordToWord() {
        }
        return WordToWord;
    }());
    //Example of Props
    var propsObject = { name: "John", age: 30 };
    console.log(propsObject);
    //Example of Moves
    var moves = ["move1", "move2", "move3"];
    console.log(moves);
    function getFood() {
        return "Pizza";
    }
    //Example of getFood
    console.log("Selected food:", getFood());
    function setProductName() {
        return "Example Product";
    }
    //Example of etProductName
    console.log("Product name set to:", setProductName());
    //Example of Directions 
    var direction = "down";
    console.log("Direction:", direction);
    //Example of IDbProps
    var dbProps = { dbName: "example_db", dbVersion: 1 };
    console.log(dbProps);
    var AToBToC = /** @class */ (function () {
        function AToBToC() {
        }
        return AToBToC;
    }());
    // los 2 valores siguientes son constantes.
    var CONSTANT_ONE = 3;
    var constantTwo = 4;
    //Example
    console.log("Value of CONSTANT_ONE:", CONSTANT_ONE);
    console.log("Value of constantTwo:", constantTwo);
})();
