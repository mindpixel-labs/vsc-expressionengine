import * as vscode from 'vscode';
import * as Completions from '../models/parameters';
import CompletionItem from '../interfaces/completion.interface';

export default class ParameterProvider {

  constructor() { }

  /**
   * Register the language completions
  */
  public static register(context?: vscode.ExtensionContext) {

    if (context === undefined) {
      vscode.window.showErrorMessage('A context was not provided to the registration method.');
      return;
    }

    for (let completion of Completions.default) {
      const channelProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'ee' }, {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

          let linePrefix = document.lineAt(position).text.substr(0, position.character);
          
          // && !/^{${completion.prefix}\s*?}/.test(document.lineAt(position).text)
          console.log(document.lineAt(position).text);

          if (!linePrefix.includes('exp:channel:entries')) {
            return undefined;
          }

          return completion.items.map((item: string) => {
            let proposal = new vscode.CompletionItem(item);
            proposal.kind = (vscode.CompletionItemKind.Property);
            proposal.documentation = 'Tomochan!';
            proposal.insertText = new vscode.SnippetString(`${item}="$1"`);
            return proposal;
          });
        }
      }, ':');

      context.subscriptions.push(channelProvider);
    }

  }

}