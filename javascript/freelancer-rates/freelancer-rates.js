function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let fullMonthCount = Math.floor(numDays / 22);
  let daysWithDiscount = fullMonthCount * 22;
  let daysWithoutDiscount = numDays - fullMonthCount * 22;
  return Math.ceil(
    ratePerHour * 8 * daysWithDiscount * (1 - discount) +
      daysWithoutDiscount * 8 * ratePerHour
  );
}
export { dayRate, daysInBudget, priceWithMonthlyDiscount };
