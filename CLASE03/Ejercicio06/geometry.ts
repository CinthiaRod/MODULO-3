// Crea un namespace llamado Geometry en un archivo geometry.ts
export namespace Geometry {
    // areaOfCircle(radius: number): number: devuelve el área de un círculo.
    export  function areaOfCircle(radius:number):number{
        return Math.PI * (radius * radius)
    };
    // areaOfSquare(side: number): number: devuelve el área de un cuadrado.
    export function areaOfSquare(side:number): number{
        return side * side
    };
};
