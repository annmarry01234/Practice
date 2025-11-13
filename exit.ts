function exit(constructor :Function){
    console.log("called");
    console.log("exit", constructor.name);
 }

 @exit
 class A{
    n:string;
    a: number;

    constructor(n:string,a:number){
        this.n = n;
        this.a = a;
    }
 }
const B = new A("ann",23);
console.log(B);
 