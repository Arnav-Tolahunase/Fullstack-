const SalesManger=require('./SalesManager');

class HrManager extends SalesManger{
    constructor(
        id, firstName, lastName, email, contactNumber, location, birthDate, incentive, target, achievedTarget, basicSalary, hra, bonus, bonusForHR
    ) {
        super(id, firstName, lastName, email, contactNumber, location, birthDate, incentive, target, achievedTarget, basicSalary, hra, bonus);
        this.bonusForHR = bonusForHR;
    }

    doWork(){
        console.log(`${this.firstName} is managing the HR and sales team.`);
    }

    computePay(){
        return super.computePay()+ this.bonusForHR;
    }
}
module.exports = HrManager;