type Wrap<T> = {value:T};
class StorageBox<T>{
    private items: Wrap<T>[] = [];

    public addItem(item: Wrap<T>) : void{
        this.items.push(item);
    }

    public removeItem(item:Wrap<T>):void{
        this.items = this.items.filter(i => i!== item);
    }
    public getItems(): Wrap<T>[] {
        return this.items;
    }

    public toString():string{
        return "storage bos "+ this.items.map(i=>i.value);
    }
}

const box = new StorageBox<number>();
box.addItem({value: 42});
box.addItem({value: 100});
console.log(box.toString());