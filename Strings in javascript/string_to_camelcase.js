let words="helo hey wahtsapp";
words=words.split(" ");let s2;
//console.log(words);
for(let i=0;i<words.length;i++){
   // console.log(typeof(words[i]));
    let resu=words[i];
    console.log(resu.length);
    for(let j=0;j<resu.length;j++){
        //  console.log(resu[j]);
        if(j>0){
            break;
        }
        s2= resu[j].toLocaleUpperCase();
    }
    console.log(s2);
}




let str7 = 'Click the button to convert to camelCase';
 
//using replace(), toUpperCase and toLowercase
function camelCase(str7) {
    return str7
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
}
 
function gfg_Run() {
    console.log(camelCase(str7));
}
gfg_Run()



//using split() toUpperCase() and toLowerCase()

 
function camelCase(str7) {
    // converting all characters to lowercase
    let ans = str7.toLowerCase();
 
    // Returning string to camelcase
    return ans.split(" ").reduce((s, c) => s
        + (c.charAt(0).toUpperCase() + c.slice(1)));
 
}
 
function gfg_Run() {
    console.log(camelCase(str7));
}
gfg_Run()