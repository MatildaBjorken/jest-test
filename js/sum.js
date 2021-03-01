const sum = (x,y) =>{
    return x+y
}

const subtract = (x,y) =>{
    return x-y
}

const divide = (x, y) => {
    return x / y;
}

const multiply = (x, y) => {
    return x * y;
}

const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValue : (x) => x,
    createUser : () => {
        const user = { firstName : 'Matilda' }
        user['lastName'] = 'Björk'
        return user;
    }
}

module.exports = {sum, subtract, divide, multiply, functions}