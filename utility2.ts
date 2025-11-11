type roles = "admin"|"user"|"guest";

interface Userinfo{
    name:string;
    role:roles;
}

type util = Pick<Userinfo,"name">;

type r = Omit<Record<roles, Userinfo>, "guest">;



const cont :util = {
    name :"david"
}

const user1 : r ={
    admin:{name:"Alice",role:"admin"},
    user:{name:"Bob",role:"user"},
    //guest:{name:"Charlie",role:"guest"}
};
console.log(user1);
console.log(cont);
