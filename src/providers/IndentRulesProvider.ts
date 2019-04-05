import * as vscode from 'vscode';

export default class IndentRulesProvider{

  constructor() {}

  /**
   * Register the language indentation rules
   * Rule #1: beforeText Match an openning tag
   * Rule #1: afterext Match a closing tag
   * Rule #2: beforeText Match an opening tag but exclude single tags like <img>
   * Rule #3: beforeText Match an opening tag that has the closing tag on the next line
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
        },
        {
          beforeText: />/i,
          afterText: /^(?![\s\S])$/i,
          action: {
            indentAction: vscode.IndentAction.Indent
          }
        },
      ],
    });
  }
}