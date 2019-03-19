// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
        
    //create an empty object
    let money={
        H:0,
        Q:0,
        D:0,
        N:0,
        P:0
    };
    //check if money ammount is more than 10000
    if(currency>10000){
        delete money.H;
        delete money.Q;
        delete money.D;
        delete money.N;
        delete money.P;
        money.error = "You are rich, my friend! We don't have so much coins for exchange";
        return money;
    }
    else{
        changeMoney(currency);
        deleteProp(money);

    //function to calculate numbers of coins
        function changeMoney(currency){
            //initialize counter to every coin type
            let countH=0, countQ=0, countD=0, countN=0, countP=0;
            //count every type
            while(currency>=50){
                countH+=1;
                currency-=50;
            }
            while(currency>=25){
                countQ+=1;
                currency-=25;
            }
            while(currency>=10){
                countD+=1;
                currency-=10;
            }
            while(currency>=5){
                countN+=1;
                currency-=5;
            }
            while(currency>=1){
                countP+=1;
                currency-=1;
            }
            //add new value to property of our object
            money.H=countH;
            money.Q=countQ;
            money.D=countD;
            money.N=countN;
            money.P=countP;
            // check if property is 0 or underfined
            return money;
        } 
        //function to delete property that is not in use
        function deleteProp(money){    
            if (money.H==0){
                delete money.H;
            }
            if (money.Q==0){
                delete money.Q;
            }
            if (money.D==0){
                delete money.D;
            }
            if (money.N==0){
                delete money.N;
            }
            if (money.P==0){
                delete money.P;
            }
            return money;
        }
        return money;
        }
    
}
