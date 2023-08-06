//console.log(word);

function sorts(word){
word= word.split(" ");

return (word.sort((a, b) => b.length - a.length)[0]);

}


console.log(sorts("Hello guys this is geeksforgeeks"+
" where students learn programming"))


let word1="ashu hai bhaut pagal acha";

word1=word1.split(" "); //yaha hamne split krke ek array form kiya hai sort function array par wrk karta hai
function sorted(word1){
  return (word1.sort((a,b)=>
     b.length-a.length))
}

console.log(sorted(word1));



