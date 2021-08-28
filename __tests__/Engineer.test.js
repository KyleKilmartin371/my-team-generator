const Engineer = require('../lib/Engineer');

test('get github account', ()=>{
    const githubInput = 'githubUser';
    const engineer = new Engineer('Tom', '54321', 'employee54321@gmail.com', githubInput);

    expect(engineer.github).toBe(githubInput);
});

test('get engineer title', ()=>{
    const title = 'Engineer';
    const engineer = new Engineer('Tom', '54321', 'employee54321@gmail.com', 'githubUser', title);

    expect(engineer.title).toBe(title);
})