//partial
interface User{
    name:string; 
    age:number;
    email?:string;
}
function updateUser(user:User,updates:Partial<User>){
    return {...user,...updates};
}

function printUser(user:Required<User>){
    console.log(user.name,user.age,user.email);
}

const  user1:User = {
    name:"Alice",
    age:30,
    email:"jcnoidnsm"
};
const user2 = {
    name:"Ann",
    age:30,
    email:""
    
}

const readonlyUser:Readonly<User> = {
    name:"Bob",
    age:25
};

// readonlyUser.age=26; // Error: Cannot assign to 'age' because it is a read-only property.
const updatedUser = updateUser (user1,{age:31});
const up = printUser(user2);
console.log ( readonlyUser);