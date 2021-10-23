/**
 * 配列内の要素をセルに出力します
 *
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param  {Array<any>} array
 * @param  {number} startRow
 * @param  {number} targetColumn
 * @returns void
 */
function writeValues(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  array: Array<any>,
  startRow: number,
  targetColumn: number
): void {
  for (let i = 0; i < array.length; i++) {
    sheet.getRange(startRow + i, targetColumn).setValue(array[i]);
  }
}
