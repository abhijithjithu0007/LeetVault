var isAnagram = function(s, t) {
    

    let f = s.split('').sort().join('')
    
    let l = t.split('').sort().join('')

    if(f===l){
        return true
    }else{
        return false
    }
    
};

console.log(isAnagram("anagram","nagaram"));
