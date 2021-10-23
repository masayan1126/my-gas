/**
 * シート名をもとに、シートオブジェクトを返します
 *
 * @param  {string} sheetName
 * @returns GoogleAppsScript
 */
function initSheet(sheetName: string): GoogleAppsScript.Spreadsheet.Sheet {
  return SpreadsheetApp.getActive().getSheetByName(sheetName);
}
