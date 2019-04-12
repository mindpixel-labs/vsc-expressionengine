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

    // Disable suggestions if the user has turn them off
    if (!ConfigService.suggestionsEnabled()) {
      return Promise.resolve([]);
    } 

    for (let completion of Completions.default) {
      const channelProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'ee' }, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

          let linePrefix = document.lineAt(position).text.substr(0, position.character);

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