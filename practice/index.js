let currentYear = 2023

// let studentName = 'Илья'
let studentName = prompt("What is your name?")
// let year = 2005
let year = prompt("What year were you born?")
// let height = 165
let height = prompt("What is your height in meters?")
// let weight = 73
let weight = prompt("What is your weight in kilograms?")

let age = currentYear - year
let IMT = weight / (height * height)

console.log(studentName, 'возраст:', age, 'рост:', height, 'вес:', weight, 'индекс массы тела:', IMT)
