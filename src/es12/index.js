//replaceAll
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString1 = string.replace("JavaScript", "Python");
console.log(replacedString1);
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


//class
class Message {
    #show(val){
        console.log(val)
    };
    get #add(val) {
    }
}

//Promise.Any
const promise1 = new Promise((resolve, reject) => {
    reject("1");
});
const promise2 = new Promise((resolve, reject) => {
    resolve("2");
});
const promise3 = new Promise((resolve, reject) => {
    resolve("3");
});

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//WeakRef
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

//WeakRef
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}

//Asignación
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);