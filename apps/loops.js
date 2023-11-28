function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is a even number`);
    } else {
        console.log(`${num} is a odd number`);
    }
}

evenOrOdd(16)

function m_table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} + ${i} = ${num * i}`);
    }
}

m_table(5)

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         let output = '';
//         if (i % 3 === 0) output += 'Fizz';
//         if (i % 5 === 0) output += 'Buzz'
//         console.log(output || i);
//     }
// }

// fizzBuzz()



function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1

}

console.log(isPrime(29));