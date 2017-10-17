import { IEmployee } from './Iemployee.interface';

export class EmployeeService implements IEmployee {


    addEmployee() {
        return 1;
    }

    getEmployee() {
        return "1";
    }

    editEmployee() {
        return "-1";
    }
}

