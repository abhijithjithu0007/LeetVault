var lengthOfLastWord = function(s) {
    let all =s.split(' ').trim()
    let ab = all.pop()
     return ab.length
    
};

console.log(lengthOfLastWord("Hello World"));
