const number = 10;
//const number = 0;

console.log(Boolean(number));


const s1 = String(number);
const s2 = "" + number;
const s3 = `${number}`;

console.log(typeof s1, s1);
console.log(typeof s2, s2);
console.log(typeof s3, s3);


const string = "12";
const num = Number(string);
const num2 = +string;

console.log(typeof num, num);
console.log(typeof num2, num2);


const string2 = "12sdfhsjfbsf";
const num3 = Number(string2);

console.log(typeof num3, num3);

console.log(1 == "1");
console.log(1 == Number("1"));

console.log(1 == "1s");

console.log(1 !== "1");

const score = 100;
const additionalScore = "200";
let finalScore;

if (additionalScore === 200) {
    finalScore = score + additionalScore;
} else {
    finalScore = score;
}

console.log(finalScore);
