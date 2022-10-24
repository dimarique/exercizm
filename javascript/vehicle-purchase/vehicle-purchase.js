function needsLicense(kind) {
  return kind === "car" || kind === "truck";
}

function chooseVehicle(option1, option2) {
  if (option2 < option1) {
    return option2 + " is clearly the better choice.";
  }

  return option1 + " is clearly the better choice.";
}

function calculateResellPrice(originalPrice, age) {
  if (age >= 1 && age < 3) {
    return originalPrice * 0.8;
  } else if (age >= 3 && age <= 10) {
    return originalPrice * 0.7;
  } else {
    return originalPrice * 0.5;
  }
}

export { needsLicense, chooseVehicle, calculateResellPrice };
