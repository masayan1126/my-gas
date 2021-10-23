// FIXME: 返り値をnull許容する書き方(RegExpMatchArray | null)

/**
 * 文字列に正規表現を適用して一致する文字列を返します
 *
 * @param  {string} str
 * @param  {string} regex
 * @returns any
 */
function regexReplace(str: string, regex: string): any {
  return str.match(regex) === null ? str : str.match(regex);
}
