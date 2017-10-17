import { EmployeeService } from './employee.service';
import { IEmployee } from './Iemployee.interface';

class Employee {
    private id: number;
    protected name: string;
    address: string;
    readonly department = 'IT';
    empService = new EmployeeService();
    constructor(empName) {
        this.name = empName;
    }

    get empid() {
        return this.id;
    }

    set emplid(id: number) {
        this.id = id;
    }

    addEmp(name, address): void {
        this.empService.addEmployee();
    }

    getEmp(): string {
        return this.empService.getEmployee();
    }

}


let emp = new Employee('Rajesh');

emp.emplid = 10;

emp.empid;
