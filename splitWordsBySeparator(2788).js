var splitWordsBySeparator = function(words, separator) {
        let all = words.join(separator)
      return all.split(separator).filter((val)=>val!=='')
        
};
console.log(splitWordsBySeparator(["$easy$","$problem$"],"$"));
