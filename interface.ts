interface person{
    name:string;
    age:number;
    h?:number;
}

function getPerson(p:person):person{
    return{
        name:p.name,
        age:p.age
}}

const b= getPerson;
console.log(b);
