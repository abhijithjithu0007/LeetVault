var containsDuplicate = function(nums) {
    let dupe =new Set()

    for(let num of nums){
        if(dupe.has(num)){
            return true
        }
        dupe.add(num)
    }
    return false
};

console.log(containsDuplicate([1,2,3,4]));

