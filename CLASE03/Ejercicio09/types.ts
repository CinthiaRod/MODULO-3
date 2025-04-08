// Una función createPerson(name: string, age: number): Person: devuelve un objeto Person.
export function createPerson(name:string, age: number): {name:string, age:number} {
    return {
        name: name,
        age: age
    };
};