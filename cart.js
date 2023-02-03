const phones = [
    {name:'Realme', colour:'black', Storage:'40gp', price : 16000},
    {name:'Redme', colour:'black', Storage:'40gp', price : 21000},
    {name:'Oppo', colour:'black', Storage:'40gp', price : 20000},
    {name:'Iphone', colour:'black', Storage:'40gp', price : 80000},
    {name:'Htc', colour:'black', Storage:'40gp', price : 65000},
    {name:'Nokia', colour:'black', Storage:'40gp', price : 80000},
]

function cheefPhone(phones){
    let lowestPrice = phones[0];
    for(let i =0 ; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < lowestPrice.price){
            lowestPrice = phone;
        }
    }
    return lowestPrice;
}

const cheefest = cheefPhone(phones);

function totalcost (phones){
    let totalCost = 0;
    for(let i =0; i<phones.length; i++){
        const phone = phones[i];
        totalCost = totalCost + phone.price
    }
    return totalCost;
}

const totalPhonePrice = totalcost(phones)
console.log(totalPhonePrice)