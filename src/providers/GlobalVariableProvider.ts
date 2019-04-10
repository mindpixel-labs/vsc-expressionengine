import * as vscode from 'vscode';
import * as GlobalVariables from '../models/variables/variables.global';

export default class GlobalVariableProvider {

  constructor() { }

  /**
   * Register the language completions
  */
  public static register(context?: vscode.ExtensionContext) {

    if (context === undefined) {
      vscode.window.showErrorMessage('A context was not provided to the registration method.');
      return;
    }

    let variables = GlobalVariables.default;
    let completions: vscode.CompletionItem[] = [];

    for (let variable in variables) {
      let completion = new vscode.CompletionItem(variable);
      completion.kind = (vscode.CompletionItemKind.Property);
      if(variables[variable]['snippet'] !== '') {
        completion.insertText = new vscode.SnippetString(variables[variable]['snippet']);
      }
      completions.push(completion);
    }

    const variableProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'ee' }, {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
        
        let line = document.lineAt(position).text.substr(0, position.character + 1).replace(/ /g, '');

        // Return completions if within a conditional tag
        if (line.includes('if')) {
          return completions;
        }
        
        // Return undefined if we're already inside of a variable
        if (line !== '{}') {
          return undefined;
        }

        return completions;
      }
    }, '{');
    context.subscriptions.push(variableProvider);
  }
}