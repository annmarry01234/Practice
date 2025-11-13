type s = Awaited<Promise<string>>;
interface todo{
    title : string;
    description : string;
}
function updatetodo(Todo: todo, feildsToupdate:Partial<todo>){
    return { ...Todo, ...feildsToupdate};
    
}
const todo1 = {
    title :"ehjfvyudwb",
    description:"dhsfnun"
}

const todo2 = {
    title :"ehjfvyudwb",
    description:"dhsfnun"
}

interface chumma{
    s?:number;
    d? :number;
}
const ob:chumma =  {s : 5};
const ob1 : Required<chumma> = {s:5,d:3};

interface pinnem{
    s : number;
}

const pin:Readonly<pinnem>={
    s : 2
}
