export interface P {
  x: number;
  y: number;
}

function getLineByPs(a: P, b: P): P {
  let ab: P;
  ab = { x: (a.x - b.x), y: (a.y - b.y) };
  return ab;
}

function getLenByPs(a: P): number {
  let len: number;
  len = Math.sqrt(a.x * a.x + a.y * a.y);
  return len;
}

function getMiddlePoint(a: P, b: P): P {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

export function getDeg(a0: P, b0: P, a1: P, b1: P): number {
  a0.x = a0.x * 10000;
  a0.y = a0.y * 10000;

  a1.x = a1.x * 10000;
  a1.y = a1.y * 10000;

  b1.x = b1.x * 10000;
  b1.y = b1.y * 10000;

  b0.x = b0.x * 10000;
  b0.y = b0.y * 10000;

  const degA = Math.atan2(b0.y - a0.y, b0.x - a0.x) / Math.PI * 180;
  const degB = Math.atan2(b1.y - a1.y, b1.x - a1.x) / Math.PI * 180;

  const ddeg = degB - degA;

  return ddeg;
}

export function getScale(a0: P, b0: P, a1: P, b1: P): number {
  let ab1: P;
  ab1 = getLineByPs(a0, b0);
  let ab2: P;
  ab2 = getLineByPs(a1, b1);

  return getLenByPs(ab2) / getLenByPs(ab1);
}

export function getFocus(a0: P, b0: P, a1: P, b1: P): P {
  const mab0 = getMiddlePoint(a0, b0);
  const mab1 = getMiddlePoint(a1, b1);
  return getLineByPs(mab0, mab1);
}
