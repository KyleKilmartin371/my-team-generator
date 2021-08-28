const Intern = require('../lib/Intern');

test('get the interns school', ()=>{
    const school ='Stanford';
    const intern = new Intern('Joey', '13579', 'employee13579@gmail.com', school);

    expect(intern.school).toBe(school);
    console.log(school);
})

test('get interns title', ()=>{
    const title = 'Intern';
    const intern = new Intern('Joey', '13579', 'employee13579@gmail.com', 'Stanford', title);

    expect(intern.title).toBe(title);
    console.log(title);
})