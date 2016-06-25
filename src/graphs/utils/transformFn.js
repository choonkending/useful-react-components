// matrix(1 2 3 4 5 6) -> 1 2 3 4 5 6
const sanitizeString = s => s.slice(7, -1);
const matrixKeyValues = {'0':'a', '1':'b', '2':'c', '3':'d', '4':'e', '5':'f'};
const convertToArrayFromString = s => sanitizeString(s).split(' ');

export const translate = (x, y) => `translate(${x} ${y})`;
export const rotate = (deg, x, y) => `rotate(${deg} ${x} ${y})`;
export const toRadians = x => x * Math.PI / 180;
export const convertMatrixToString = matrix => `matrix(${matrix.join(' ')})`;
export const convertStringToMatrix = s => convertToArrayFromString(s).reduce(
  (acc, cur, i) => ({...acc, [matrixKeyValues[i]]: Number(cur)})
  ,{});

