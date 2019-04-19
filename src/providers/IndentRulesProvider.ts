import * as vscode from 'vscode';

export default class IndentRulesProvider{

  constructor() {}

  /**
   * Register the language indentation rules
   * Rule #1: beforeText Match an openning tag
   * Rule #2: afterText Match a closing tag
   * Rule #3: beforeText Match an opening tag but exclude single tags like <img>
   * Rule #4: beforeText Match an opening tag that has the closing tag on the next line
  */
  public static register(context?: vscode.ExtensionContext) {
    vscode.languages.setLanguageConfiguration('ee', {
      onEnterRules: [
        {
          beforeText: /<(?!\/|area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)([a-zA-Z0-9]*)\b[^>]*>$/i,
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
          beforeText: /<[^/]([a-zA-Z0-9]*)\b[^>]*>$/i,
          afterText: /^(?![\s\S])$/i,
          action: {
            indentAction: vscode.IndentAction.Indent
          }
        },
        {
          beforeText: /}/i,
          afterText: /^{/i,
          action: {
            indentAction: vscode.IndentAction.IndentOutdent
          }
        },
      ],
    });
  }
}