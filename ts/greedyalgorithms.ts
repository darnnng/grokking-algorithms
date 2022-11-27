let statesNeeded:Set<string> = new Set<string>(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations:object = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);
const finalStations:Set<string>  = new Set<string>();

while (statesNeeded.size) {
    let bestStation:string|null = null;
    let statesCovered:Set<string> = new Set<string>();
    for (let station in stations) {
      const states:Set<string> = stations[station];
      const covered:Set<string> = new Set<string>([...statesNeeded].filter(elem => states.has(elem)));
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    statesNeeded = new Set([...statesNeeded].filter(elem => !statesCovered.has(elem)));
    finalStations.add(bestStation);
  }