const SalesEmployee = require('./HR/SalesEmployee');
const SalesManager = require('./HR/SalesManager');
const HrManager = require('./HR/HrManager');

let emp1=new SalesEmployee(
    1, "Amit", "Sharma", "amit@company.com", "9999999999", "Mumbai", new Date(1995, 4, 12), 1000, 5000, 20000, 100000, 120000
);

let emp2=new SalesManager(
    2, "Neha", "Patil", "neha@company.com", "8888888888", "Delhi", new Date(1990, 2, 15), 1500, 7000, 30000, 200000, 250000, 10000
);

let emp3=new HrManager(
    3, "Rohit", "Verma", "rohit@company.com", "7777777777", "Bangalore", new Date(1988, 6, 20), 2000, 10000, 40000, 300000, 350000, 15000, 5000
);

emp1.doWork();
emp2.doWork();
emp3.doWork();

console.log(emp1.toString());
console.log("Salary: ",emp1.computePay());
console.log("--------------------------------------------");

console.log(emp2.toString());
console.log("Salary: ",emp2.computePay());
console.log("--------------------------------------------");


console.log(emp3.toString());
console.log("Salary: ",emp3.computePay());
console.log("--------------------------------------------");
