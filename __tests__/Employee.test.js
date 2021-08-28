const Employee = require('../lib/Employee');

test('get employee', ()=>{
    const employee = new Employee('');
 
    expect(typeof(employee)).toBe('object');
});

test('get employee name', ()=>{
    const name = 'Dave';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

test('get employee id number', ()=>{
    const id = "1234";
    const employee = new Employee('Dave', id);

    expect(employee.id).toBe(id);
});

test('get employee email', ()=>{
    const email = 'employee12371@gmail.com';
    const employee = new Employee('Dave', "1234", email);

    expect(employee.email).toBe(email);
});

test('get the employee title', ()=>{
    const title = 'Employee';
    const employee = new Employee('Dave', '123', 'employee12371@gmail.com', title);

    expect (employee.title).toBe(title);
});
