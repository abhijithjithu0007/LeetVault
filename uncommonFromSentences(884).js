var uncommonFromSentences = function(s1, s2) {
    let spl1 = s1.split(' ')
    let spl2 = s2.split(' ')

    let arr =[]    

    for(let i =0;i<spl1.length;i++){
        if(!spl2.includes(spl1[i])){
            arr.push(spl1[i])
        }
    }
    for(let j=0;j<spl2.length;j++){
        if(!spl1.includes(spl2[j])){
            arr.push(spl2[j])
            
        }
        
    }
  return arr    
};

console.log(uncommonFromSentences("apple apple","banana"));
