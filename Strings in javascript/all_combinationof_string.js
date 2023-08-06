let string="Dog";
let combinations=[];
function combi(string){
for(let i=0;i<string.length;i++){
    for(j=i+1;j<string.length+1;j++){
        combinations.push(string.slice(i,j));
    }
}
return combinations;
}
console.log(combi(string));