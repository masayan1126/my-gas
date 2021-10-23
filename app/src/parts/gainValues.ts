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
  return sheet.getRange(startRow, startColumn, theLastRow, lastColumn).getValues();
}
