function frontDoorResponse(line) {
  return line[0];
}

function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function backDoorResponse(line) {
  const newLine = line.trim();
  return newLine[newLine.length - 1];
}

function backDoorPassword(word) {
  const wordCapitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return wordCapitalized + ", please";
}

export {
  frontDoorResponse,
  frontDoorPassword,
  backDoorResponse,
  backDoorPassword,
};
