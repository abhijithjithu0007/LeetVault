var addBinary = function(a, b) {
    let one = parseInt( a ,2 );
    let two = parseInt( b, 2 );
   

    let sum = one+two

    return (sum >>> 0).toString(2);
    
    
};

console.log(addBinary("1010","1011"));
// (dec >>> 0).toString(2);

//parseInt( a.split('').reverse().join(''), 2 );