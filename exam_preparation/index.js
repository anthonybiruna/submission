// -----1-----
// let numbers = [1, 2, -3, 4, -11, -3]

// const sumPostiveNegative = (arr = []) => {
//     let positive = 0
//     let negative = 0
//     if (numbers[i] > 0) {

//     } else if (numbers[i] < 0) {

//     }

//     return
// }

// // ----2-----
// let numbers = [1, 2, 3, 4, 5]
// let pangkat = ""

// for(let i = 0; i < numbers.length; i++) {
//     pangkat += numbers[i] * numbers[i]
// }

// const square = (arr = []) => {
//     // let result = []

//     // arr.forEach((val) => {
//     //     result.push(val * val)
//     // })

//     // return result

//     let result = arr.map((val) => {
//         return val * val
//     })

//     return result

// }
// console.log(square([1,2,3,4,5]));

// ------3-------

// let numbers = [1, 2, 3, 4, 5, 9]
// const plusMinus = (arr = []) => {
//    let result = 0
//    let operator = "plus"
   
//     arr.forEach((val) => {
//         if(operator == "plus") {
//             result += val
//             operator = "minus"
//         } else if (operator = "minus") {
//             result -= val
//             operator = "plus"
//         }
//     })
//     return result
// }

// console.log(plusMinus([1, 2, 3, 4, 5, 9]))

// -----4-----
// remove vowels
// input: "javascipt"
// output: "jvscrpt"

// ------ exercise -------

// 1. Remove vowels
// Input: "javascript"
// Output: "jvscrpt"
 
let javascipt = "javascript"
let vowels = "aiueo"

let js = javascipt.split("")
let vwl = vowels.split("")

const filtered = js.filter((val) => {
    return val != val.vwl
}) 
console.log(filtered);


// const alphabetArr = "abcdefghijklnopqrstuvwxyz".split("")

// 2. Alphabet value
// Hitung jumlah value suatu string dimana setiap huruf memiliki value
// posisi huruf tersebut di dalam abjad. Contoh: A = 1, B = 2, Z = 26, J = 10
// Examples
// Input: "abc"
// Output: 6

// Input: "steve"
// Output: 71

const alphabetArr = "abcdefghijklnopqrstuvwxyz".split("")

for (let i = 0; i < String.length; i++) {
    
}
// ----


// 3. Odd alphabet value
// Sama seperti soal nomor 2, tetapi kali ini hanya hitung huruf yang memiliki
// value ganjil

// Input: "steve"
// Output: 29

// Input: "abc"
// Output: 4

// 4. Unique items
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// unique (hanya berada di salah satu array saja)

// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [5, 4, 0]

// Bonus Question
// 5. Remove duplicates
// Diketahui ada 2 array of numbers, dimana 2 array tersebut memiliki beberapa
// value/number yang sama. Tampilkan sebuah array baru yang berisi list value
// dari kedua array tersebut, tetapi sudah
// Input:
// arr1 = [1, 3, 7, 4]
// arr2 = [1, 5, 3, 7, 0]
// Output: [1, 3, 4, 5, 7, 0]