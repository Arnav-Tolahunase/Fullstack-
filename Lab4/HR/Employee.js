class Employee{
    constructor(id, firstName, lastName, email, contactNumber, location, birthDate){
        if(new.target === Employee){
            throw new Error("Employee is an abstract class and cannot be instantiated");
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.location = location;
        this.birthDate = birthDate;
    }

    doWork(){
        throw new Error("doWork() must be implemented by derivated classes");
    }

    computePay(){
        return 0;
    }

    toString(){
        return `Employee [${this.constructor.name}]
        ID: ${this.id}
        Name: ${this.firstName} ${this.lastName}
        Email: ${this.email}
        Location: ${this.location}`;
    }

}
module.exports = Employee;