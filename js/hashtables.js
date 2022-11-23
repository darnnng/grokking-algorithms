//цены

const book = {};
book['apple'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;
console.log(book)

//voted

const voted={};
const checkVoter=(name)=>{
    if (voted[name]) {
        console.log('kick them out!')
    }
    else {
        voted[name] = true;
        console.log("let them vote!");
      }
}

//кэш

const cache={};
const getPage=(url)=>{
    if (cache[url]) {
        return cache[url]
    }
    else {
        let data=getDataFromServer()
        cache[url]=data
        return data;
      }
}