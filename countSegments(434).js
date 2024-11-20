var countSegments = function(s) {
    let word = s.split(' ').filter((val)=>val.trim())
    console.log(word);
    
    if(word==[]){
        return 0
    }
    
    
    return word.length
};

console.log(countSegments(", , , ,        a, eaefa"));


  