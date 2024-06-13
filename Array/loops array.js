a = ["Kailash","Lokesh","Prerna","Om","Arun"]
// console.log("Using For Loop : ");
for(i=0;i<a.length;i++){
    console.log(a[i]);
}
// console.log("");
// console.log("Using For Each Loop : ");

a.forEach((value,element,arr)=>{
    console.log(value,element,arr);
})
// console.log("");

// console.log("Using For of Loop : ");

for (names of a){
    console.log(names);
}