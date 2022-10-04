export const getDistCirRec = function (circle, rect) {
  let testX = circle.x;
  let testY = circle.y;

  if (circle.x < rect.x) {
    testX = rect.x;
  } else if (circle.x > rect.x + rect.width) {
    testX = rect.x + rect.width;
  }

  if (circle.y < rect.y) {
    testY = rect.y;
  } else if (circle.y > rect.y + rect.height) {
    testY = rect.y + rect.height;
  }

  const xDistance = circle.x - testX;
  const yDistance = circle.y - testY;

  const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  if (distance < circle.radius) {
    return true;
  } else {
    return false;
  }
};

export const getDistance = function (x1, y1, x2, y2) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};
