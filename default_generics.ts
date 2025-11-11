class NmaeValue<T>{
    private name: T | undefined;

    constructor(name: T){
        this.name = name;
    }

    public setValue(n:T){
           this.name = n;
    }

    public getValue():T | undefined{
        return this.name;
    }


}

const me = new NmaeValue(10);
me.setValue(10);
console.log(me.getValue());
