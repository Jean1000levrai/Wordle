// console.log("hello world!");

let a;
a = Array.from({length: 4}, (_, i ) => (i*2))
console.log(a)

let b = [];

for (let i = 0; i<4; i++){
    b[i] = i*2;
}
console.log("b", b)