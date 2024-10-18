var getEncryptedString = function (s, k) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const curr = (k+i) % s.length;
    console.log(curr);
    
    str += s[curr];
    
  }
  return str;
};

console.log(getEncryptedString("dart", 3));
