interface Values {
  [index: number]: any;
}

/**
 * 対象範囲をすべて取得し、二次元配列で返します
 *
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param  {number} startRow
 * @param  {number} startColumn
 * @param  {number} theLastRow
 * @param  {number} lastColumn
 * @returns Values
 */
function gainValues(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  startRow: number,
  startColumn: number,
  theLastRow: number,
  lastColumn: number
): Values {
  // rowNumnberは実際に取得したい行数なので、最終行マイナス1する必要がある
  const rowNumnber = theLastRow - 1;
  return sheet.getRange(startRow, startColumn, rowNumnber, lastColumn).getValues();
}
