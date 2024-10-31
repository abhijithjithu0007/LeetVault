var relativeSortArray = function(arr1, arr2) {
    let all = [];
    let extra = [];
      for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) {
          all.push(arr1[j]);
        }
      }
    }
  
    for (let k = 0; k < arr1.length; k++) {
      if (!arr2.includes(arr1[k])) {
        extra.push(arr1[k]);
      }
    }
  
    extra.sort((a, b) => a - b);
  
    return [...all, ...extra];
  };
  
  console.log(
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
  );
  