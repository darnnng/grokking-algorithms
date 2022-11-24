//поиск продавца манго

interface Graph<T> {
    [key:string]:T
};


const graph:Graph<string> = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const personIsSellerTS=(name:string):boolean=> {
    return name[name.length - 1] === "m";
  }
  
const searchTS=(name:string):boolean=> {
let queue = [];
queue = queue.concat(graph[name]);

const searched:string[] = [];
while (queue.length) {
    let person:any = queue.shift();
    if (searched.indexOf(person) === -1) {
        if (personIsSellerTS(person)) {
            console.log(person + " is a mango seller!");
            return true;
        }

        queue = queue.concat(graph[person]);
        searched.push(person);
    }
}
return false;
}


