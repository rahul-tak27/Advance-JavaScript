console.log("hello");

setTimeout(()=>{
    console.log("its callback execute");
}, 5000);

console.log("End"); 

const start = Date.now();

while (Date.now() - start < 10000) {
    
}

console.log("10 seconds complete");

