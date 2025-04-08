// createUser(name: string, age: number): devuelve un objeto con name y age.
export default function createUser(name:string, age: number): {name:string, age:number} {
    return {
        name: name,
        age: age
    };
};