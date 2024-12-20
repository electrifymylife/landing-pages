export const random = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export const makePortal = (start, end) => {
  let startPosition = random(start, end)
  let endPosition = random(start, end);

  while (startPosition === endPosition) {
    endPosition = random(start, end)
  }

  return [startPosition, endPosition]
}


export const makeStartedPosition = (start, end, ignored = []) => {

  let startPosition = random(start, end);

  while (ignored.includes(startPosition)) {
    startPosition = random(start, end);
  }

  return startPosition;
}

export const generateSteps = (fieldSize, startPosition, stepCount, portals = []) => {
  const steps = {
    words: [],
    indexes: [],
    portals: portals,
  };
  let stepIndex = 0;
  let nextStep = 0;
  let nextPosition = 0;

  const typeStep = ['up', 'right', 'down', 'left']
  const weightStep = [-fieldSize, 1, fieldSize, -1]
  let currentPosition = startPosition;
  let linePosition = 0;

  while (steps.words.length < stepCount) {
    stepIndex = random(0, 3)
    nextStep = weightStep[stepIndex];
    nextPosition = currentPosition + nextStep;

    if (nextPosition >= fieldSize * fieldSize || nextPosition < 0) {
      continue;
    }

    linePosition = currentPosition % fieldSize;

    if (Math.abs(nextStep) === 1 && ((linePosition + nextStep) < 0 || (linePosition + nextStep) >= fieldSize)) {
      continue;
    }

    currentPosition = nextPosition

    if (portals.includes(currentPosition)) {
      currentPosition = portals[0] === currentPosition ? portals[1] : portals[0];
    }

    steps['words'].push(typeStep[stepIndex])
    steps['indexes'].push(currentPosition)
  }

  return steps;
}
