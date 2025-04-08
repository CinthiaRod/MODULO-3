// createMultiplier(factor: number): (num: number) => number: devuelve otra función que multiplica un número por el factor dado.
export default function createMultiplier(factor: number): (num: number) => number {
    return function(num: number): number {
      return num * factor;
    };
  }