/**
 * rangeValuesを一次元配列に変換して返します
 *
 * @param  {Values} values
 * @returns Array
 */
function flattenValues(values: Values): Array<any> {
  return Array.prototype.concat.apply([], values);
}
