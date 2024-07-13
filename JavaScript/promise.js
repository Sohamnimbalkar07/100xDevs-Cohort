const fs = require("fs");

function readFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile("soham.txt", "utf-8", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onReject(error) {
  console.log(error);
}

readFile().then(onDone).catch(onReject);
