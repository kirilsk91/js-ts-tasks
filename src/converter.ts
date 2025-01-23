/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports.converter = function (value: number, from: string, to: string): number {
  const mToMiConst = 0.000621371;
  const miToMConst = 1609.34;
  const grToLbConst = 0.00220462;
  const lbToGrConst = 453.592;
  const tempConst = 273.15;

  let res: number;

  switch (`${from}=>${to}`) {
    case 'mi=>m':
      res = value * miToMConst;
      break;
    case 'm=>mi':
      res = value * mToMiConst;
      break;
    case 'gr=>pound':
      res = value * grToLbConst;
      break;
    case 'pound=>gr':
      res = value * lbToGrConst;
      break;
    case 'C=>K':
      res = value + tempConst;
      break;
    case 'K=>C':
      res = value - tempConst;
      break;
    default:
      throw new Error(`Conversion isn't possible with ${from} and ${to}.`);
  }

  return parseFloat(res.toFixed(2));
};
