const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, office, title){
        super(name, id, email);

        this.office = office;
        this.title = title;
    }
    getOfficeNumber(){
        return this.office;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;