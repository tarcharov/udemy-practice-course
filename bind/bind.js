function bind(context, fn){
   return function(){
       fn.apply(context)
   }
}
function logPerson(){
    console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
}


const person1 = {name: "Kostya", age: 21, job: "Manager"}
const person2 = {name: "Vasya", age: 27, job: "Coder"}
const person3 = {name: "mfk", age: 237, job: "egor"}
const person4 = {name: "Vas", age: 219, job: "loh"}
bind(person1,logPerson)()
bind(person2,logPerson)()
bind(person4,logPerson)()
bind(person3,logPerson)()
