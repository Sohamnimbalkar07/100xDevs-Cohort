const fs = require('fs');

snapshot = fs.readFileSync("./snapshot.json");
const snapshotSnapshot = JSON.parse(snapshot.toString());

console.log(snapshotSnapshot);

console.log(snapshot);