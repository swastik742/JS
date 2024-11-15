const arr=[1,2,3,4,5]

for (const i of arr) {
  //  console.log(i);
    
}

const greetings = "Hello World"

for (const ch of greetings) {
   if(ch==" ")
   {
    continue;
   }
   // console.log(ch)
    
}

const maps =new Map()
maps.set("IN","india")
maps.set("FIN","finland")
maps.set("UK","united kingdom")

for (const [key,values] of maps) {
 //console.log(key,":",values);   
}


//for in loop for objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(programming[key]);
    
}

//five.js
//const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach(function(val){
   // console.log(val);
})
//coding.forEach( (items)=>{
   // console.log(items)
})

function printme(item) {
    //console.log(item);
}

//coding.forEach(printme)
//coding.forEach( (items,index,arr)=>{
    //console.log(items,index,arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (items)=>console.log(items.languageName)
)

//six.js
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (items)=>{
  //  console.log(items);
    return items
    
})