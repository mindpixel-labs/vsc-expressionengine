import * as vscode from 'vscode';

export default class IndentRulesProvider{

  constructor() {}

  /**
   * Register the language indentation rules
  */
  public static register(context?: vscode.ExtensionContext) {
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
          beforeText: /<(?!area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr|)([a-zA-Z]+)+(>|.*?[^?]>)/i,
          action: {
            indentAction: vscode.IndentAction.Indent
          }
        }
      ],
    });
  }
}