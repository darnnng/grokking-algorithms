//просуммировать все в массиве

const sumArrTS =(array:number[]):number=>{
    return array.reduce((prev:number, cur:number)=> {return  prev + cur});
  }

//сумма рекурсивно

const sumRecursiveTS=(array:number[]):number=>{
  if (array.length == 0) return 0;
  return array[0] + sumRecursiveTS(array.slice(1));
}

  
//быстрая сортировка

const quicksortTS=(array:number[]):number[]=> {

    if (array.length < 2) return array;
    let pivot:number = array[0];
  
    let less:number[] = array.slice(1).filter(el=>el <= pivot);
    let greater:number[] = array.slice(1).filter(el=> el > pivot);
  
    return (quicksortTS(less).concat([pivot],quicksortTS(greater)));
  }