
const mySym= Symbol("key1")

const user={
    name:'wasp',
    age:19,
    islogin:true,
    lastonline:['saturday','sunday'],
    [mySym]:"key1"

}
//console.log(user['name']);
//console.log(user['age']);
//console.log(user['lastonline']);
//console.log(user[mySym]);

user.name="swastik"
//Object.freeze(user)
//user.name='mike'
//console.log(user);

user.greeting = function (){
    console.log(`hello ${this.name}`);
    
}
console.log(user.greeting());
