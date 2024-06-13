const num = process.argv[2];
const arr=[]
let factorial ;
for (let i = 0; i < num; i++) {
    arr.push(num-i)
    
}
arr.reduce((pre,cur)=> factorial=pre*cur);
console.log(arr);
console.log(factorial);