


var handler=require('./handler.js');
var events=require('events');

var emmiter=new events.EventEmitter();




var Account=function(amount){
    var balance=amount;

    var monitor=function(){
        if(balance<5000){
            console.log("Balance is below minimum threshold");
            emmiter.emit('LowBalance');
            //handler.blockAccount();
        }
        else if(balance>100000){
            console.log("Balance exceeds maximum limit");
            emmiter.emit('HighBalance');
            //handler.payIncomeTax();
        }
    }

    var deposit=function(amount){
        balance+=amount;
        monitor();
    }
    
    var withdraw=function(amount){
        if(amount<=balance){
            balance-=amount;
        }else{
            console.log("Insufficient funds");
        }
        monitor();
    }
    var getBalance=function(){
        return balance;
    }
    return{
        deposit:deposit,
        withdraw:withdraw,
        getBalance:getBalance
    }

}

emmiter.on('LowBalance',handler.blockAccount);
emmiter.on('HighBalance',handler.payIncomeTax);

var myAcc=new Account(10000);
myAcc.deposit(100000);
myAcc.withdraw(50000);
console.log(myAcc.getBalance());
