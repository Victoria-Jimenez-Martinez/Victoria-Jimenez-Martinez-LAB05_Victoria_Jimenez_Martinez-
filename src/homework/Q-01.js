(function () {
    // Lista de correos electrónicos de usuarios de Meta-X
    var emails = [
        "email1@gmail.com",
        "email2@gmail.com",
        "email3@gmail.com"
    ];
    console.log(emails);
    // Lista de artículos de un carrito
    var cartItems = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(cartItems);
    // Función para sumar 3 a un número y retornarlo
    var addThree = function (num) {
        return num + 3;
    };
    console.log(addThree(2));
    // Función para capitalizar una palabra pasada por parámetro
    // Se refactorizó el nombre de la función a camelCase
    // El resultado no debería cambiar
    var capitalize = function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    };
    console.log(capitalize("capricorn"));
    // Variable que indica si ocurrió un evento
    var eventOccurred = false;
    if (eventOccurred)
        console.log('event');
    // Variable que se encarga de verificar si un usuario puede acceder o no
    var hasAccess = true;
    if (hasAccess)
        console.log('welcome');
    // Variable para calcular el promedio de 3 números
    var average = (1 + 2 + 3) / 3;
    console.log(average);
    // Variable que almacena el valor de PI
    var PI = 3.141592654;
    console.log(PI);
    // Variable que controla si un archivo es editable
    var isEditable = false;
    if (isEditable)
        console.log('edit this file?');
    // Variable para almacenar el valor de e
    var e = 2.718281828;
    console.log('Value of E: ' + e);
})();
