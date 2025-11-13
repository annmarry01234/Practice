type IsString<T> = T extends string ? "heheh" : "no";

function checktype<T>(value : T): IsString<T>{
    if (typeof value === "string"){
        return "string" as IsString<T>;
    }
    else{
        return "no" as IsString<T>;
    }

}

console.log(checktype("ann"))

interface animal{
    live():void;
}

interface dog extends animal{
    woof():void;
}

type ex1 = dog extends animal? number:string