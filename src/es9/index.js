// USAR EL PLUGIN "CODE RUNNNER" E IR EJECUTANDO TROZOS DE CÓDIGO
//Propagación
const obj = {
    name: "Oscar",
    age: 32,
    country: "MX"
};

let {
    country,
    ...all
} = obj;
console.log(country, all);

const obj = {
    name: "Oscar",
    age: 32
};

const obj1 = {
    ...obj,
    country: "MX"
};

console.log(obj1);


//Finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve("Hello World!"), 3000): reject(new Error("Test Error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finaliza"))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);