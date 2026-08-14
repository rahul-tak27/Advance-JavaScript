// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };

// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };

// console.log(calculateDiameter(radius));

// ---------- functional programming non repatation ----------------

const radius = [3, 1, 2, 4];

const calculate = function (radius, logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
};

const calculateArea = function (radius) {
    return Math.PI * radius * radius;
};

const calculateCircumference = function (radius) {
    return 2 * Math.PI * radius;
};

const calculateDiameter = function (radius) {
    return 2 * radius;
};

console.log(calculate(radius, calculateArea));
console.log(calculate(radius, calculateCircumference));
console.log(calculate(radius, calculateDiameter));