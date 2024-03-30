# Principios SOLID

Los principios SOLID son un conjunto de cinco principios de diseño de software que promueven la creación de código limpio, mantenible y flexible. Fueron introducidos por Robert C. Martin (también conocido como "Uncle Bob") a principios de la década de 2000 como guía para escribir código orientado a objetos de alta calidad.

## S - Principio de Responsabilidad Única (Single Responsibility Principle)

Este principio establece que una clase debe tener una sola razón para cambiar. En otras palabras, cada clase debe tener una única responsabilidad o tarea. Esto promueve la cohesión y facilita el mantenimiento del código.

#### Ejemplo:

```javascript
// Mal ejemplo: Una clase con múltiples responsabilidades
class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }

  calcularImpuestos() {
    // Calcula los impuestos
  }

  generarReporte() {
    // Genera un reporte
  }
}

// Buen ejemplo: Clases con responsabilidades separadas
class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre;
    this.salario = salario;
  }
}

class CalculadoraImpuestos {
  calcularImpuestos(empleado) {
    // Calcula los impuestos para un empleado
  }
}

class GeneradorReportes {
  generarReporte(empleado) {
    // Genera un reporte para un empleado
  }
}
```
## O - Principio de Abierto/Cerrado (Open/Closed Principle - OCP)

Este principio establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para extensión pero cerradas para modificación. En otras palabras, cuando se necesite agregar nueva funcionalidad, debería hacerse sin alterar el código existente.

#### Ejemplo:

```javascript

// Mal ejemplo: Modificando una clase existente para agregar funcionalidad
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

// Se requiere agregar funcionalidad para calcular el perímetro
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }

  // Se modifica la clase existente para agregar el método perímetro
  perimetro() {
    return 2 * (this.ancho + this.alto);
  }
}

// Buen ejemplo: Extensión de la funcionalidad sin modificar la clase existente
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

// Se crea una clase separada para calcular el perímetro
class CalculadoraPerimetro {
  calcularPerimetro(rectangulo) {
    return 2 * (rectangulo.ancho + rectangulo.alto);
  }
}
```
## L - Principio de Sustitución de Liskov (Liskov Substitution Principle - LSP)

Este principio establece que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar la corrección del programa. En otras palabras, una clase derivada debe poder sustituir a su clase base sin que el comportamiento del programa cambie.

#### Ejemplo:
 
* Un mal ejemplo: 

```javascript

class Pajaro {
  volar() {
    console.log("El pájaro está volando.");
  }
}

class Pinguino extends Pajaro {
  volar() {
    throw new Error("¡Los pingüinos no pueden volar!");
  }
}

function realizarVuelo(pajaro) {
  pajaro.volar();
}

const pajaro1 = new Pajaro();
const pajaro2 = new Pinguino();

realizarVuelo(pajaro1); 
realizarVuelo(pajaro2); 
```
* Un buen Ejemplo: 
```javascript
class Pajaro {
  volar() {
    console.log("El pájaro está volando.");
  }
}

class Pinguino extends Pajaro {
  nadar() {
    console.log("El pingüino está nadando.");
  }
}

function realizarAccion(pajaro) {
  pajaro.volar();
  if (pajaro instanceof Pinguino) {
    pajaro.nadar();
  }
}

const pajaro1 = new Pajaro();
const pajaro2 = new Pinguino();

realizarAccion(pajaro1); 
realizarAccion(pajaro2); 
```

## I - Principio de Segregación de Interfaces (ISP)

El principio de Segregación de Interfaces establece que los clientes no deben depender de interfaces que no utilizan. Es mejor tener interfaces más específicas que una única interfaz grande.

#### Ejemplo:

```javascript

// Mal ejemplo: Una interfaz grande que contiene métodos no utilizados por todos los clientes
class Trabajador {
  trabajar() {
    // Trabaja
  }

  tomarDescanso() {
    // Toma un descanso
  }

  revisarCorreo() {
    // Revisa el correo electrónico
  }
}

// Buen ejemplo: Interfaces más pequeñas y específicas
class Trabajador {
  trabajar() {
    // Trabaja
  }
}

class Descansador {
  tomarDescanso() {
    // Toma un descanso
  }
}

class RevisorCorreo {
  revisarCorreo() {
    // Revisa el correo electrónico
  }
}
```

## D - Principio de Inversión de Dependencia (DIP)

El principio de Inversión de Dependencia establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Además, las abstracciones no deben depender de detalles, sino que los detalles deben depender de las abstracciones.

#### Ejemplo:

```javascript

// Mal ejemplo: Dependencia directa de una implementación concreta
class Lampara {
  encender() {
    // Enciende la lámpara
  }
}

class Interruptor {
  constructor(lampara) {
    this.lampara = lampara;
  }

  presionar() {
    this.lampara.encender();
  }
}

const lampara = new Lampara();
const interruptor = new Interruptor(lampara);
interruptor.presionar();

// Buen ejemplo: Dependencia invertida a través de una interfaz
class Interruptor {
  constructor(dispositivo) {
    this.dispositivo = dispositivo;
  }

  presionar() {
    this.dispositivo.encender();
  }
}

class Lampara {
  encender() {
    // Enciende la lámpara
  }
}

class Radio {
  encender() {
    // Enciende el radio
  }
}
 ```
 ### **Nombre:** Victoria Jimenez Martinez 