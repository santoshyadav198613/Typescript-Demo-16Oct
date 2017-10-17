let fname: string = 'Santosh';
let Fname: string = 'Santosh';


let age: number = 10;

let isValid: boolean = false;

console.log(isValid);

let dob: Date = new Date('11-nov-2013');
console.log(dob);

let unionTypes: string | number | Array<number>;  //union data type

unionTypes = 'tersr';
unionTypes = 10;


let employee: any;
employee = 10;
employee = 'Rajesh';

employee = { id: 10, name: 'Ramesh', age: 10 };

let emplList: any[] = [];

emplList.push(10);
emplList.push(employee);

console.log(emplList);

let departments: Array<string> = new Array<string>();

departments.push('IT');
departments.push('Marketing');

departments.forEach(function (dept) {
    console.log(dept)
});

departments.forEach((dept) => console.log(dept));


for (let dept of departments) {
    console.log(dept);
}


for (let dept in departments) {
    console.log(dept);
    departments[dept];
}

let twodimensional: string[][];
