(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }
  
  function calculateOperation1(a: number, b: number, c: number): number {
    return calculateOperation(a, b, c);
  }
  
  console.log('Operation 1: '+calculateOperation1(2, 4, 1));

  function calculateOperation2(x: number, y: number, z: number): number {
    return calculateOperation(x, y, z);
  }

  console.log('Operation 2: '+calculateOperation2(2, 4, 6));

  // EX - 2
  function calculateArea(shape: string, ...args: number[]): number {
    switch (shape) {
      case 'rectangle':
        return args[0] * args[1];
      case 'circle':
        return Math.PI * args[0] * args[0];
      default:
        throw new Error('Forma no válida especificada');
    }
  }

  function calculateRectangleArea(length: number, width: number): number {
    return calculateArea('rectangle', length, width);
  }
  
  console.log('Rectangle Area: ' + calculateRectangleArea(4, 6));
  
  function calculateCircleArea(radius: number): number {
    return calculateArea('circle', radius);
  }
  
  console.log('Circle Area: ' + calculateCircleArea(3));

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }


  // Ex-3 an option to apply DRY

  function validateInput(input: string, type: string): boolean {
    switch (type) {
      case 'email':
        const emailRegex =/@.*\./;
        return emailRegex.test(input);
      case 'username':
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        return usernameRegex.test(input);
      default:
        throw new Error('Invalid input type specified');
    }
  }

  const email = 'correo@example.com';
  const invalidEmail = 'correo@ejemplo';
  const username = 'usuario123';
  const invalidUsername = 'usuario-123';

  console.log('Valid email: ' + validateInput(email, 'email'));
  console.log('Invalid email: ' + validateInput(invalidEmail, 'email'));
  console.log('Valid username: ' + validateInput(username, 'username'));
  console.log('Invalid username: ' + validateInput(invalidUsername, 'username'));
  
})();