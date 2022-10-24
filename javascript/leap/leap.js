export const isLeap = input => {
  if (input % 400 === 0) {
    return true;
  } else if (input % 100 !== 0 && input % 4 === 0) {
    return true;
  }
  return false;
};