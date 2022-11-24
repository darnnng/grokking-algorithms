//поиск продавца манго

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const personIsSeller=(name)=> {
    return name[name.length - 1] === "m";
  }
  
  const search=(name)=> {
    let queue = [];
    queue = queue.concat(graph[name]);
  
    const searched = [];
    while (queue.length) {
        let person = queue.shift();
        if (searched.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(person + " is a mango seller!");
                return true;
            }
  
            queue = queue.concat(graph[person]);
            searched.push(person);
        }
    }
    return false;
  }


