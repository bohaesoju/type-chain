const name = 'uyjoong',
    age = 32,
    gender = 'male';

const sayHi = (n:string, a:number, g:string) => {
    return `Hello ${n} you are ${a} you are a ${g} `
};

console.log(sayHi(name, age, gender));

export {};