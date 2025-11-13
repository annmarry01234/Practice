function readonly(target:any,key:string){
    console.log("lets decorate");
    Object.defineProperty(target,key,{
        writable:false,
        configurable : true
    });
}
class car{
    @readonly
    brand = "toyota"
}
const he = new car();
console.log(he);