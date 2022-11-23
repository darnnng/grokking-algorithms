//цены 

interface HashTable<T> {
    [key: string]: T;
}

const book: HashTable<number> = {};

book['apple'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;

//voted


interface Voted<T> {
    [key:string]:T;
}
const votedPeople: Voted<boolean>={}

const checkVoterTS=(name:string):void=>{
    if (votedPeople[name]) {
        console.log('kick them out!')
    }
    else {
        votedPeople[name] = true;
        console.log("let them vote!");
      }
}

//кэш

interface Cache<T> {
    [key:string]:T;
}

const urlcache: Cache<string>={}

const getPageTS=(url:string)=>{
    if (cache[url]) {
        return urlcache[url]
    }
    else {
        let data=getDataFromServer()
        urlcache[url]=data
        return data;
      }
}