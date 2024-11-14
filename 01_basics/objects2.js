 /*singleton objects
 const tinderuser =  new Object()
 console.log(tinderuser);
 */
const tinderuser={}

tinderuser.name="swas"
tinderuser.age=22
tinderuser.id='312a'
//console.log(tinderuser);

const regUser={
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:"swastik",
            lastname:"kamble",
        }

    }
}

//console.log(regUser.fullname.userfullname.lastname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1 , obj2}
//const obj3= Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);


const databaseinfo=[
    {id:1,email:"abc"},
    {id:2,email:"bc"},
    {id:3,email:"ac"},
    {id:4,email:"c"}
]
//console.log(databaseinfo[1].email);

console.log(tinderuser);
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('id'));

