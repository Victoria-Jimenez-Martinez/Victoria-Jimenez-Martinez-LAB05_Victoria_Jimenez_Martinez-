(() => {
  
  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  // Lista de correos electrónicos de usuarios de Meta-X
  const emails: Array<string> = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(emails);

  // Lista de artículos de un carrito
  const cartItems: Array<Object> = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];

  console.log(cartItems);

  // Función para sumar 3 a un número y retornarlo
  const addThree = (num: number): number => {
    return num + 3;
  }

  console.log(addThree(2));
  
  // Función para capitalizar una palabra pasada por parámetro
  // Se refactorizó el nombre de la función a camelCase
  // El resultado no debería cambiar
  const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  console.log(capitalize("capricorn"));
  
  // Variable que indica si ocurrió un evento
  let eventOccurred: boolean = false;

  if (eventOccurred) console.log('event');

  // Variable que se encarga de verificar si un usuario puede acceder o no
  let hasAccess: boolean = true;

  if (hasAccess) console.log('welcome');

  // Variable para calcular el promedio de 3 números
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);

  // Variable que almacena el valor de PI
  const PI: number = 3.141592654;

  console.log(PI);

  // Variable que controla si un archivo es editable
  let isEditable: boolean = false;

  if (isEditable) console.log('edit this file?');

  // Variable para almacenar el valor de e
  const e: number = 2.718281828; 

  console.log('Value of E: '+ e);
  

})();
