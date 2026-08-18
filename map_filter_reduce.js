const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }
];

// acc = { 26: 1, 75: 1, 50: 1 }

// reduce() ----------------------------------------------

const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } 
    else {
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output);

// Map() --------------------------------------------
const result = users.map((x)=>{
    return x.firstName + " " + x.lastName;
});

console.log(result);

// filter() --------------------------------

const out = users.filter((x)=>{
    if(x.age < 30){
        return x.firstName;
    }
}).map((x)=>{
    return x.firstName;
});

console.log(out);



