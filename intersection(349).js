var intersection = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        arr.push(nums1[i]);
      }
    }
  }

  let dup = new Set(arr);

  return [...dup];
};
