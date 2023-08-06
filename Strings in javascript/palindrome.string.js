let nstr="naman";
let length=nstr.length;
let start=0;
let end=length-1;
let count=start;
while(start<end){
    if(nstr[start]==nstr[end])
    {
        count=start;
    }
    else{
        break;
    }
    start++;
    end--;
}

if(count==start-1)
{
    console.log("Yes palindrome");
}
else{
    console.log("Not a palindrome");
}

//shortest method-- split(),then reverse() then join()

function checkpalindrome1(nstr){
      if(nstr==nstr.split("").reverse().join(""))  //yaha hamne "" space ke around split kiya hai 
          return true;
      else
          return false;
}
console.log("Is palindrome ? :"+checkpalindrome1(nstr));
