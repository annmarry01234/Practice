const arr: number[] = [10, 20, 30];
const value:number = arr[6] ?? 0;
console.log(arr?.[0]); // 10 ✅ valid
console.log(value); // undefined ❌ out-of-bounds
