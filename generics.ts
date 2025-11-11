class StorageBox<T>{
    private items :T[] = [];


public addItem(item: T):void
{
     this.items.push(item);
}
public removeItem(item : T):void{
    this.items = this.items.filter(i=> i!== item);
}
public getItems(): T[]{
    return this.items;
}
public toString():string{
if (this.items.length === 0){
    return "StorageBox is empty";
}
return "StorageBox contains : "+ this.items
}

}

const box = new StorageBox<string>();
box.addItem("Book");
box.addItem("Laptop");
console.log(box.toString());