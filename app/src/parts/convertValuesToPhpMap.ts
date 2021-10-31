/**
 * rangeValuesをPHPの連想配列(key value)に変換します
 * @param  {Values} rangeValues
 * @param  {number} keyColumn
 * @param  {number} valueColumn
 * @returns Array
 */

function convertValuesToPhpMap(
  rangeValues: Values,
  keyColumn: number,
  valueColumn: number
): Array<any> {
  const newMap = [];

  rangeValues.forEach((values) => {
    newMap.push(`"${values[keyColumn - 1]}" => "${values[valueColumn - 1]}"`);
  });

  return newMap;
}
