comp = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

comp.shift();
comp.splice(1,1,"Ola");
comp.push("Amazon");
console.log(comp);