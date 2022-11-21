function findSmallestTS<T> (arr:T[]):number {
    let smallest:T=arr[0];
    let smallestIndex:number=0;
    for (let i:number=0; i<arr.length;i++) {
        if (arr[i]<smallest) {
            smallest=arr[i];
            smallestIndex=i;
        }
    }
    return smallestIndex
  }
  
  function selectionSortTS<T>(arr:T[]):T[]{
    let newArr:T[]=[]
    if (!arr.length) return [];
    while (arr.length>0) {
      let smallest:number=findSmallest(arr)
      newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
  }


  
 