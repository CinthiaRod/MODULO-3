// Actividad 5: Usar aserciones dobles
// Crea una variable de tipo any y haz una conversión con aserciones dobles para convertirla en un number.
//  Muestra el resultado.

let variableAny: any = "12";
let conversionDeVariable: number = (variableAny as any) as number;
console.log(`El valor original tipo any es: ${variableAny}`);
console.log(`Conversión de variable tipo any "${variableAny}" a number: ${conversionDeVariable} (tipo: ${typeof conversionDeVariable})`);

