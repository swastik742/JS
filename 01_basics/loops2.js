const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks=books.filter((bk) => bk.genre==='History')
  let secbooks=books.filter((p) => p.publish===2009)
  let two = books.filter( (x) => x.genre==="Non-Fiction" && x.edition===2008)
  //console.log(userbooks);
  // console.log(two);

//seven.js

//const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newnums = myNumers.map( (num)=> num*10).map( (num)=> num+1).filter( (num)=> num>40)
//console.log(newnums);

//nine.js

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totalprice = shoppingCart.reduce( (acc,cprice) => acc+cprice.price,0)
console.log(totalprice-);
