/**
 * 対象シート全体の最終行の値と対象列をもとに、その列の最終行を取得します。
 * 組み込みのgetLastRowだと、列の途中に空白があると対応できないため実装
 * @param  {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param  {number} lastRowOverallSheet
 * @param  {number} targetColumn
 * @returns nu
 */
function gainLastRow(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  lastRowOverallSheet: number,
  targetColumn: number
): number {
  var range = sheet.getRange(1, targetColumn, lastRowOverallSheet, targetColumn).getValues();

  // 初回のループ時にセルが空白だったら、targetColumnの最終行とlastRowOverallSheetは等しい(シート全体の最終列)
  for (let i = lastRowOverallSheet - 1; i >= 0; i--) {
    if (range[i][0] != '') {
      return i + 1;
    }
  }
}
