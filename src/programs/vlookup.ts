/**
 * vlookup関数
 * targetSheetの指定列(inputColumnOnTargetSheet)の値をもとに、
 * masterSheetの指定列の値(keyColumn)と一致するデータ(valueColumn)を
 * targetSheetの指定列(inputColumnOnTargetSheet)の右隣に出力します
 *
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} targetSheet
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} masterSheet
 * @param  {number} inputColumnOnTargetSheet
 * @param  {number} inputColumnOnMasterSheet
 * @param  {number} startRowOnMasterSheet
 * @param  {number} startColumnOnMasterSheet
 * @param  {number} lastColumnOnMasterSheet
 * @param  {number} keyColumn - 連想配列のキーにしたい値の列番号
 * @param  {number} valueColumn - 連想配列のバリューにしたい値の列番号
 */
function vlookup(
  targetSheet: GoogleAppsScript.Spreadsheet.Sheet,
  masterSheet: GoogleAppsScript.Spreadsheet.Sheet,
  inputColumnOnTargetSheet: number,
  inputColumnOnMasterSheet: number,
  startRowOnMasterSheet: number,
  startColumnOnMasterSheet: number,
  lastColumnOnMasterSheet: number,
  keyColumn: number,
  valueColumn: number
) {
  const lastRowOverallOnTargetSheet = targetSheet.getLastRow();
  const lastRowOverallOnMasterSheet = masterSheet.getLastRow();

  // 最終行の取得
  const theLastRowOnTargetSheet = gainLastRow(
    targetSheet,
    lastRowOverallOnTargetSheet,
    inputColumnOnTargetSheet
  );
  const theLastRowOnMasterSheet = gainLastRow(
    masterSheet,
    lastRowOverallOnMasterSheet,
    inputColumnOnMasterSheet
  );
  // 最終行の取得ここまで

  const rangeValuesOnTargetSheet = gainValuesTheColumn(
    targetSheet,
    2, // ヘッダーが1行目にあると想定して2行目から開始
    inputColumnOnTargetSheet,
    theLastRowOnTargetSheet
  );

  // マスタシート側の範囲セルをすべて取得
  const rangeValuesOnMasterSheet = gainValues(
    masterSheet,
    startRowOnMasterSheet,
    startColumnOnMasterSheet,
    theLastRowOnMasterSheet,
    lastColumnOnMasterSheet
  );

  const newDictionary = convertValuesToDictionary(rangeValuesOnMasterSheet, keyColumn, valueColumn);
  const filterdRangeValues = findValuesByKey(rangeValuesOnTargetSheet, newDictionary);

  writeValues(targetSheet, filterdRangeValues, 2, inputColumnOnTargetSheet + 1);
}
