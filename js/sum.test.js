const {sum, subtract, divide, multiply, functions} = require ('./sum')

test('adds 1+2 to equal 3', ()=>{
    expect(sum(1,2)).toBe(3)
})

test('subtracts 2-1 to equal 1', ()=>{
    expect(subtract(2,1)).toBe(1)
})

test('divides 8/2 to equal 4', () => {
    expect(divide(8, 2)).toBe(4);
});

test('multiply 4*2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
  });

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Matilda Björk object', () => {
    expect(functions.createUser()).toStrictEqual({firstName:'Matilda', lastName: 'Björk'});
});


