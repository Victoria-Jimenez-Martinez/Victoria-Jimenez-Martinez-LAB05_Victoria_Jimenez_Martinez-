(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const USER_EMAILS: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];
  
  console.log(USER_EMAILS);

  //Lista de compras de un carrito
  const CART_ITEMS: Array<object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];
  
  console.log(CART_ITEMS);
  
  //funcion para sumar mas 3 a un numero y retornarlo
 
  const addThree = (num: number): number => num + 3;

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizeWord(word: string): string {

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //tambien puede ser =>
    //const CAPITALIZED_WORD = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //return CAPITALIZED_WORD;
  }

  console.log(capitalizeWord("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let isEventOccurred: boolean = false;

  if(isEventOccurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  const CAN_USER_ACCESS: boolean = true;

  if(CAN_USER_ACCESS) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const AVERAGE: number = (1 + 2 + 3) / 3;

  console.log(AVERAGE);
  
  //variable que almacena el valor de PI
  const PI: number = 3.141592654;

  console.log(PI);
  

  //variable que controla si un archivo es modificable 
  let isFileEditable: boolean = false;

  if(isFileEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const E: number = 2.718281828; 

  console.log (E);
  
})();