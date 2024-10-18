var isPalindrome = function(s) {
    let all =s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
     let result = all.split('').reverse().join('')

     console.log(result);
     console.log(all);
     
     
    // if(all===result){
    //     return true
    // }else{
    //     return false
    // }
    
};

console.log(isPalindrome("race a car"));
