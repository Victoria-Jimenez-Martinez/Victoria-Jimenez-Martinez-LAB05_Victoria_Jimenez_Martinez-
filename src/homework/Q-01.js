(function () {
    /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES
       ADEMAS DE COMPROBAR SI USA LET O CONST,
      SE PUEDE REFACTORIZAR, ETC.
    */
    //lista de emails de usuarios de Meta-X
    var USER_EMAILS = [
        "email1@gmail.com",
        "email1@gmail.com",
        "email1@gmail.com"
    ];
    console.log(USER_EMAILS);
    //Lista de compras de un carrito
    var CART_ITEMS = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(CART_ITEMS);
    //funcion para sumar mas 3 a un numero y retornarlo
    var addThree = function (num) { return num + 3; };
    console.log(addThree(2));
    //funcion para capitalizar una palabra pasara por params
    //idente o refactorice de ser necesario
    //el resultado no deberia cambiar
    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        //tambien puede ser =>
        //const CAPITALIZED_WORD = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        //return CAPITALIZED_WORD;
    }
    console.log(capitalizeWord("capricorn"));
    //variable que alerta en caso de que algun evento suceda
    var isEventOccurred = false;
    if (isEventOccurred)
        console.log('event');
    //variable que se encarga de verificar 
    //si un usuario puede acceder o no
    var CAN_USER_ACCESS = true;
    if (CAN_USER_ACCESS)
        console.log('welcome');
    //variable para hallar el promedio de 3 numeros
    var AVERAGE = (1 + 2 + 3) / 3;
    console.log(AVERAGE);
    //variable que almacena el valor de PI
    var PI = 3.141592654;
    console.log(PI);
    //variable que controla si un archivo es modificable 
    var isFileEditable = false;
    if (isFileEditable)
        console.log('edit this file?');
    //variable para almacenar el valor de e
    var E = 2.718281828;
    console.log(E);
})();
