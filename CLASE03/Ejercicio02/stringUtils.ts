// capitalize(str: string): string: devuelve el string con la primera letra en mayúscula.
export function capitalize(str:string):string{
    return str.charAt(0).toUpperCase() + str.slice(1); //obtenemos la primera letra de la cadena con .charAt(0), convertimos a mayuscula con .toUpperCase(), finalmente lo concatenamos
};
// reverse(str: string): string: devuelve el string al revés.
export function reverse(str:string): string{
    return str.split('').reverse().join(''); // Dividimos la cadena con .split(), invertimos el orden con .reverse() y finalmente unimos de nuevo
};