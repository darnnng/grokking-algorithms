const findSmallest=(arr)=>{
    let smallest=arr[0];
    let smallestIndex=0;
    for (let i=0; i<arr.length;i++) {
        if (arr[i]<smallest) {
            smallest=arr[i];
            smallestIndex=i;
        }
    }
    return smallestIndex
  }
  
  const selectionSort=(arr)=>{
    let newArr=[]
    if (!arr.length) return [];
    while (arr.length>0) {
      let smallest=findSmallest(arr)
      newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
  }
  

