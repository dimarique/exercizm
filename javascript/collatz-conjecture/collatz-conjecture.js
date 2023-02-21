export const steps = (n) => {
    let counter = 0
    if (n < 1) {
        throw new Error('Only positive numbers are allowed')
    }
    while (n > 1) {
        console.log(n)
        if (n % 2 === 0) {
            n = n / 2
        } else { n = n * 3 + 1 }
        counter++
    }
    return counter
};
