let str1="hellool";
let resu=[];
for(let i=0;i<str1.length;i++){
    let count=0;
    for(let j=0;j<str1.length;j++){
        if( str1[i] == str1[j] && i>j )
          {
           break;
          }
        if(str1[i]==str1[j])
         {
            count++;
         }
    }
    if(count>0){
    resu.push(count);
    
    console.log("Occurence of "+str1[i] +" is "+ count);
}
}

console.log(resu);
  