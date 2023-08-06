let string1= "evil";
let string2= "veil";
/*function check(string1,string2){
for(let i=0;i<string1.length;i++){
    for(let j=0;j<string2.length;j++){
          if(string1[i]==string2[j])
          {
             return true;
          }
          else{
            return false;
          }
    }
     
}
}

console.log(check(string1,string2)); */

function check(string1,string2){
    if(string1.length!==string2.length){
        return false;
    }
    //split() kiya b/c vo array par hi apply hota hai
    string1=string1.split("").sort().join(""); 
    console.log(string1); //join used b/c join returns array as an string
    string2=string2.split("").sort().join("");
    console.log(string2);

    if(string1===string2)
    return true;
else
return false;
}

console.log(check(string1,string2));