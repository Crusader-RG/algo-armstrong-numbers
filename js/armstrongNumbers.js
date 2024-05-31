// How can you make this more scalable and reusable later?

const findArmstrongNumbers = (num) => {
    let ansArr = [0]
    for (i = 1; i <= num; i++){
        let jNum = 0
        itArr = Array.from(i.toString()).map(Number)
        for (let j = 0; j < itArr.length; j++) {
            jNum = jNum + (itArr[j] ** itArr.length)
        }
      if (i === jNum) {
        ansArr.push(i)
      }   
    }
    return ansArr
};
console.log(findArmstrongNumbers(0)) // [0]
console.log(findArmstrongNumbers(4)) // [0,1,2,3,4]
console.log(findArmstrongNumbers(8)) // [0,1,2,3,4,5,6,7,8]
console.log(findArmstrongNumbers(99)) // [0,1,2,3,4,5,6,7,8,9]
console.log(findArmstrongNumbers(999)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]

// module.exports = findArmstrongNumbers
