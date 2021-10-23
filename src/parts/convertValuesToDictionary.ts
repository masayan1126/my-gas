/**
 * rangeValuesを連想配列(key value)に変換します
 * @param  {Values} rangeValues
 * @param  {number} keyColumn
 * @param  {number} valueColumn
 * @returns Array
 */
function convertValuesToDictionary(
  rangeValues: Values,
  keyColumn: number,
  valueColumn: number
): Array<any> {
  const newDictionary = [];

  rangeValues.forEach((values) => {
    newDictionary.push({ key: values[keyColumn - 1], value: values[valueColumn - 1] });
  });

  return newDictionary;
}
