function totalTricketPrice(quantity){
    const first100TricketRate = 100;
    const second100TricketRate = 90;
    const thired100TricketRate = 80;
    if(quantity <= 0 ){
        const massage = 'Please select ticket quantity';
        return massage;
    }
    else if(quantity <= 100){
        const tricketPrice = quantity * first100TricketRate;
        return tricketPrice;
    }
    else if(quantity <= 200){
        const first100TricketPrice = first100TricketRate * 100;
        const restDay = quantity - 100;
        const restDayTicketPrice = restDay * second100TricketRate;
        const second100TricketPrice =first100TricketPrice + restDayTicketPrice;
        return second100TricketPrice;
    }
    else{
        const first100TricketPrice = first100TricketRate * 100;
        const second100TricketPrice = second100TricketRate * 100;
        const restDay = quantity - 200;
        const restDayTicketPrice = restDay * thired100TricketRate;
        const thired100TricketPrice = first100TricketPrice + second100TricketPrice+restDayTicketPrice;
        return thired100TricketPrice;
    }
}

const totalPrice = totalTricketPrice(400);
console.log(totalPrice)