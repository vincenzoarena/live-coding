function arrayRange(start, length) {
    const array = [];
    for (let i = 0; i < length; i++, start++) {
      array[i] = start;
    }
    return array;
  }
  
  console.log(arrayRange(1, 4));
  console.log(arrayRange(-6, 4));