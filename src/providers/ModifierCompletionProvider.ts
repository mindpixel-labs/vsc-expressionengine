import * as vscode from 'vscode';
import * as completion from '../models/tags/completion.modifiers';
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
      const channelProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'html' }, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

          // Get the text at the cursor position
          let linePrefix = document.lineAt(position).text.substring(0, position.character);

          // Ensure the line does not contain any native EE tags
          if ( /(?:<.+?>)?({)(if|layout|layout:set|exp|channel|entries).*(})(?:<\/.+?>)?$/g.test(document.lineAt(position).text.trim()) ) {
            return undefined;
          }

          // Ensure the line is not just standard text being written
          if ( !/(?:<.+?>)?(\{.*?\})(?:<\/.+?>)?/g.test(document.lineAt(position).text.trim() ) ) {
            return undefined;
          }

          return completion.default.items.map((item: string) => {
            return new vscode.CompletionItem(item, vscode.CompletionItemKind.Method);
          });
        }
      }, ':');

      context.subscriptions.push(channelProvider);

  }

}