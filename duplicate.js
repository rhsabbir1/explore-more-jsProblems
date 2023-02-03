const names = ["abou",'babul', 'cabul', 'dabul' , 'fabul',"abou",'babul', 'cabul'];
function duplicate(names){
    const uniqu =[];
    for(let i =0; i<names.length; i++){
        var name = names[i];
        // console.log(name)
        if(uniqu.includes(name)=== false){
            uniqu.push(name)
        }
    }
   return uniqu;
}
const count =duplicate(names)
console.log(count)