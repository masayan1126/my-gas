interface Values {
  [index: number]: any;
}
/**
 * 対象列の値をすべて取得し、配列で返します
 *
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param  {number} startRow
 * @param  {number} targetColumn
 * @param  {number} theLastRow
 * @returns Values
 */
function gainValuesTheColumn(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  startRow: number,
  targetColumn: number,
  theLastRow: number
): Values {
  return sheet.getRange(startRow, targetColumn, theLastRow).getValues();
}
