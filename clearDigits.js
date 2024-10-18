var clearDigits = function (s) {
    let arr =[]
    for(let str of s){
        if(/\d/.test(str)){
            if(arr.length>0){
                arr.pop()
            }
            
        }else{
            arr.push(str)
        }
        
    }
    return arr.join('')
};

console.log(clearDigits("ab23"));
