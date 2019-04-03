import * as vscode from 'vscode';

export default class IndentRulesProvider {

  constructor() {}

  /**
   * Register the language indentation rules
  */
  public register() {
    vscode.languages.setLanguageConfiguration('ee', {
      onEnterRules: [
        {
          beforeText: />/i,
          afterText: /^(?:\s)?<\/([a-zA-Z_-]*)\s*>/i,
          action: {
            indentAction: vscode.IndentAction.IndentOutdent
          }
        },
        {
          beforeText: /<(?!img)([a-zA-Z]+)+(>|.*?[^?]>)/i,
          action: {
            indentAction: vscode.IndentAction.Indent
          }
        }
      ],
    });
  }
}