export const isArmstrongNumber = num => {
    let result = 0;
    let splittedNum = num.toString().split("");
    for (let dig of splittedNum) {
        result = result + Math.pow(Number(dig), splittedNum.length);
    }
    if (result == num) {
        return true;
    } else {
        return false;
    }
};
