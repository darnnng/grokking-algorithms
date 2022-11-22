//первое решение с циклом while //псевдокод

const lookForKey= (mainBox)=>{
    let pile=mainBox.pileLookThroughMethod()
    while (pile) {
        let box = pile.grabBoxMethod()
        for (let i=0;i<box.length;i++) {
            if (item.isBoxMethod()) {
                pile.push(item)
            }
            else if (item.isKey()) {
                return "Found the key!"
            }
        }
    }
    
}

//второе решение с рекурсией //псевдокод

const lookForKeyRec=(box)=>{
    for (let i=0;i<box.length;i++) {
        if (item.isBoxMethod()) {
            lookForKeyRec(item)
        }
        else if (item.isKey()) {
            return "Found the key!"
        }
    }
}

//countdown

function countdown(i) {
    console.log(i);
    if (i <= 0) return;
    else countdown(i - 1);
  }
  

//greet

const bye=()=>{
    console.log("ok bye!");
}

const greet2=(name)=>{
     console.log("how are you, "+name+ "?");
}

const greet1=(name)=>{
    console.log("hello, " + name + "!");
    greet2(name);
    console.log("getting ready to say bye...");
    bye();
}

//factorial

const fact=(x)=>{
    return (x===1)?1:x*fact(x-1)
}




