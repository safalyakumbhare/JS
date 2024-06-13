a = [250,645,300,900,50]
let fact = a.map((value,element,arr)=>{
    let dis=  value / 10 ;
    return value - dis 
})

console.log(fact);

