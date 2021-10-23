/**
 * 特定の列の右隣に特定の値を出力します
 *
 * @param  {string} inputSheetName
 * @param  {number} inputColumn
 * @param  {number} startRow
 */
function outPutNextTheColumn(inputSheetName: string, inputColumn: number, startRow: number) {
  const inputSheet = initSheet(inputSheetName);

  const lastRowOverallSheet = inputSheet.getLastRow();
  const theLastRow = gainLastRow(inputSheet, lastRowOverallSheet, inputColumn);
  const outputColumn = inputColumn + 1;
  const rangeValues = gainValuesTheColumn(inputSheet, startRow, inputColumn, theLastRow);

  //ここで何か配列を加工する

  writeValues(inputSheet, flattenValues(rangeValues), startRow, outputColumn);
}
