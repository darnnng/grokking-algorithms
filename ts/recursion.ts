//countdown

function countdownTS(i:number):null {
    console.log(i);
    if (i <= 0) return null;
    else countdownTS(i - 1);
    return null
  }


//greet

const byeTS=():void=>{
    console.log("ok bye!");
}

const greet2TS=(name:string):void=>{
     console.log("how are you, "+name+ "?");
}

const greet1TS=(name:string):void=>{
    console.log("hello, " + name + "!");
    greet2TS(name);
    console.log("getting ready to say bye...");
    byeTS();
}

//factorial

const factTS=(x:number):number=>{
    return (x===1)?1:x*factTS(x-1)
}