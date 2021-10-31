/**
 * ValuesをPHPのマップ(key-value)に変換して出力します
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} targetSheet
 * @param  {number} inputColumnOnTargetSheet
 * @param  {number} keyColumn
 * @param  {number} valueColumn
 */
function outPutValuesToPhpMap(
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet,
  inputColumnOnTargetSheet: number,
  lastColumn: number,
  keyColumn: number,
  valueColumn: number
): void {
  const lastRowOverallOnTargetSheet = targetSheet.getLastRow();

  // 最終行の取得
  const theLastRowOnTargetSheet = gainLastRow(
    targetSheet,
    lastRowOverallOnTargetSheet,
    inputColumnOnTargetSheet
  );

  // 対象シート側の範囲セルをすべて取得
  const rangeValuesOnTargetSheet = gainValues(
    targetSheet,
    2, // ヘッダーが1行目にあると想定して2行目から開始
    inputColumnOnTargetSheet,
    theLastRowOnTargetSheet,
    lastColumn
  );

  const newMap = convertValuesToPhpMap(rangeValuesOnTargetSheet, keyColumn, valueColumn);

  writeValues(targetSheet, newMap, 2, lastColumn + 1);
}
