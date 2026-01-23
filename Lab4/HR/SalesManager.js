const SalesEmployee = require('./SalesEmployee');

class SalesManager extends SalesEmployee{
    constructor(
        id, firstName, lastName, email, contactNumber, location, birthDate, incentive, target, achievedTarget, basicSalary, hra, bonus
    ){
        super(
            id, firstName, lastName, email, contactNumber, location, birthDate, incentive, target, achievedTarget, basicSalary, hra);
        this.bonus = bonus;
    }
    doWork(){
        console.log(`${this.firstName} is managing the sales team and strategy.`);
    }
    computePay(){
        return super.computePay() + this.bonus;
    }
}

module.exports = SalesManager;