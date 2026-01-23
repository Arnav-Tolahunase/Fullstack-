const Employee=require('./Employee');

class SalesEmployee extends Employee{
    constructor(
        id, firstName, lastName, email, contactNumber, location, birthDate, incentive, target, achievedTarget, basicSalary, hra){
        super(id, firstName, lastName, email, contactNumber, location, birthDate);
        this.incentive = incentive;
        this.target = target;
        this.achievedTarget = achievedTarget;
        this.basicSalary = basicSalary
        this.hra = hra;
    }
    doWork(){
        console.log(`${this.firstName} is selling products to customers.`);
    }
    computePay(){
        let totalSalary = this.basicSalary + this.hra;
        if (this.achievedTarget >= this.target){
            totalSalary += this.incentive;
        }
        return totalSalary;
    }
}
module.exports = SalesEmployee;