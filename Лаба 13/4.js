function jops(arr) {
    if (Array.isArray(arr)) {
      return arr.length;
    } else {
      return 0;
    }
  }
  
  let array = [1, 94, 31, 6, 23, 89];
  let count = jops(array);
  console.log("Количество элементов в массиве:", count);
  