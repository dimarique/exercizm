function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return archerIsAwake === false && prisonerIsAwake;
}

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
    (petDogIsPresent && archerIsAwake === false) ||
    (prisonerIsAwake && knightIsAwake === false && archerIsAwake === false)
  );
}

export { canExecuteFastAttack, canSpy, canSignalPrisoner, canFreePrisoner };
