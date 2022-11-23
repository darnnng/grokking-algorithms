//просуммировать все в массиве

const sumArr =(array)=>{
    return array.reduce((prev, cur)=> {return  prev + cur});
  }

//сумма рекурсивно

const sumRecursive=(array)=> {
  if (array.length == 0) return 0;
  return array[0] + sumRecursive(array.slice(1));
}

//быстрая сортировка


const quicksort=(array)=> {

    if (array.length < 2) return array;
    let pivot = array[0];
  
    let less = array.slice(1).filter(el=>el <= pivot);
    let greater = array.slice(1).filter(el=> el > pivot);
  
    return (quicksort(less)+[pivot]+quicksort(greater)).split(" ");
  }

