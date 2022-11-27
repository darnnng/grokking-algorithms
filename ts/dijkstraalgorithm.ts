interface Graph<T> {
    [key:string]:T
};

const graph:Graph<number|object>  = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

const costs:Graph<number> = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

const parents:Graph<string|null> = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed:string[] = [];

const findLowestCostNodeTS=(costs:Graph<number>):string|null=> {
  let lowestCost:number=Infinity;
  let lowestCostNode:null|string=null;

  for (let node in costs) {
    const cost:number = costs[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node:string|null = findLowestCostNodeTS(costs);

while (node !== null) {
  const cost:string = costs[node];
  const neighbors = graph[node];
  Object.keys(neighbors).forEach((n)=> {
    const newCost:string = cost + neighbors[n];
    
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  });
  processed = processed.concat(node);
  node = findLowestCostNodeTS(costs);
}
