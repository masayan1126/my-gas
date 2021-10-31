/**
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
