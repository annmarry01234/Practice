interface house{
    name:string;
    yard?:{
        sqft:number;
    };
}

const obj:house = {name:"heeh",
    yard:{sqft:500}};

const ob2:house = {
    name:"ann"
}
//console.log(obj.yard?.sqft);
console.log(ob2.yard?.sqft);
// nullish coalesing
function nullish(mileage:number | undefined | null){
    console.log(`${mileage ??  'idk'}`);
}

nullish(null);

//null assertion
console.log(obj.yard!.sqft);