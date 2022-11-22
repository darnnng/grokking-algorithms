//просуммировать все в массиве

const sumArr =(array)=>{
    return array.reduce((prev, cur)=> {return  prev + cur});
  }

//быстрая сортировка


const quicksort=(array)=> {

    if (array.length < 2) return array;
    let pivot = array[0];
  
    let less = array.slice(1).filter(el=>el <= pivot);
    let greater = array.slice(1).filter(el=> el > pivot);
  
    return (quicksort(less)+[pivot]+quicksort(greater)).split(" ");
  }

