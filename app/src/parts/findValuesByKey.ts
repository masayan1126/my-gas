/**
 * rangeValuesの一つ一つの要素をDictionaryから検索して、一致するデータのみの配列を返します
 * @param  {Array<any>} rangeValuesOnTargetSheet
 * @param  {Array<any>} newDictionary
 * @returns Values
 */
function findValuesByKey(rangeValuesOnTargetSheet: Array<any>, newDictionary: Array<any>): Values {
  const array = [];
  rangeValuesOnTargetSheet.forEach((values) => {
    newDictionary.forEach((elem) => {
      if (elem['key'] === values[0]) {
        array.push(elem['value']);
      }
    });
  });

  return array;
}
