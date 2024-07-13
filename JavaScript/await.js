function readFile() {
    let p = new Promise(function(resolve){
       resolve("Hi there!");
    });
    return p;
}

// readFile().then((data)=> {
//     console.log(data);
// });

async function main() {
    const data = await readFile();
    console.log(data);
}

main();