const Manager = require('../lib/Manager');

test('get office number on top of employee stats', ()=>{
    const office = '101';
    const manager = new Manager('Mary', '86420', 'Boss86420@gmail.com', office);

    expect(manager.office).toBe(office);
    console.log(office);
})
