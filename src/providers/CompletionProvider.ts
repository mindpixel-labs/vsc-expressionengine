import * as vscode from 'vscode';
import * as Completions from '../models/completions';
import ConfigService from '../services/ConfigService';

export default class CompletionProvider {

  constructor() {}

  /**
   * Register the language completions
  */
  public static register(context?: vscode.ExtensionContext) {

    if (context === undefined) {
      vscode.window.showErrorMessage('A context was not provided to the registration method.');
      return;
    }

    // Disable suggestions if the user has turned them off
    if (!ConfigService.suggestionsEnabled()) {
      return Promise.resolve([]);
    } 

    // Iterate over the completions and build as needed
    for (let completion of Completions.default) {
      const channelProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'html' }, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
          
          // Get the text at the cursor position
          let linePrefix = document.lineAt(position).text.substring(0, position.character);

          // If the line does not end with the prefix and the line does not contain the prefix return
          if (!linePrefix.endsWith(completion.prefix) && !/^{exp:channel}/.test(document.lineAt(position).text)) {
            return undefined;
          }

          return completion.items.map((item: string) => {
            return new vscode.CompletionItem(item, vscode.CompletionItemKind.Method);
          });
        }
      }, ':');
    
      context.subscriptions.push(channelProvider);
    }

  }

}