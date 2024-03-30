(() => {

  /* Haz uso de nomenclaturas correctas en la variables
     mantener los nombres dados
  */
 

  class WordToWord {}

  interface Props {
    name: string;
    age: number;
  }
  
  //Example of Props
  const propsObject: Props = { name: "John", age: 30 };
  console.log(propsObject);

  type Moves = string[];
  
  //Example of Moves
  const moves: Moves = ["move1", "move2", "move3"];
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

  type Directions = "up" | "down" | "left" | "right";

  //Example of Directions 
  const direction: Directions = "down";
  console.log("Direction:", direction);

   interface IDbProps {
    dbName: string;
    dbVersion: number;
  }

  //Example of IDbProps
  const dbProps: IDbProps = { dbName: "example_db", dbVersion: 1 };
  console.log(dbProps);

  class AToBToC {}

  // los 2 valores siguientes son constantes.

  const CONSTANT_ONE = 3;

  let constantTwo = 4;

  //Example
  console.log("Value of CONSTANT_ONE:", CONSTANT_ONE);
  console.log("Value of constantTwo:", constantTwo);

})();