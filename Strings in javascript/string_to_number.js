let s="1234455";
let a=[];
console.log(s.length);
for(let i=0;i<s.length;i++)
{
    console.log(typeof(s[i]));
}
console.log(a);
console.log(parseInt(s));

let b=Number(s);
console.log(typeof(b)); //number

//using Mathfloor
let c= Math.floor(s);
console.log("floor");
console.log(typeof(c));