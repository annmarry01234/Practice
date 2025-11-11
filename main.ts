abstract class polygon{
    public abstract getArea():number;
    public toString(): string{
        return `polygon area = ${this.getArea()}`;
    }
}

class rectangle extends polygon{
    public constructor(private width:number, private height:number){
        super();
    }
    public getArea():number{
        return this.width * this.height;
    }
}
const rect = new rectangle(20,20);
console.log(rect.toString());