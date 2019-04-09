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
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

          let linePrefix = document.lineAt(position).text.substr(0, position.character);
          let currentLineNumber = position.line;

          let commpletions = completion.items.map((item: string) => {
            let completionItem = new vscode.CompletionItem(item);
            completionItem.kind = (vscode.CompletionItemKind.Property);
            completionItem.documentation = '';
            completionItem.insertText = new vscode.SnippetString(`${item}="$1"`);
            return completionItem;
          });

          // Note: Scope suggestions to within a tag paremeter by matching the prefix to the first found tag

          for (let index = currentLineNumber; index >= 0; index--) {
            let line = document.lineAt(new vscode.Position(index, 0)).text;
            let lineTrimmed = line.replace(/ /g, '');
            
            // Disable parameter suggestions outside of a tag
            if (lineTrimmed === '}' ) {
              return undefined;
            }

            // Disable parameter suggestions on a closing tag
            if (currentLineNumber === index && line.includes('{/')) {
              return undefined;
            }
            
            // Check if on a single line
            if(currentLineNumber === index) {
              if (line.includes('}') && line.endsWith('}')) {
                // console.log(`We're on a single line tag, go ahead and return parameters`);
                return commpletions;
              }
            }

            // Ensure current line does not contain a single closing bracket
            if (currentLineNumber === index && line.includes('}')) {
              return undefined;
            }

            // Check lines above if not on a single line
            if (line.includes('exp:channel:entries') && !line.endsWith('}') && !line.includes('}')) {
              // console.log(`You're on a multiline, but go ahead and return parameters`);
              return commpletions;
            }
          }

          return undefined;
        }
      }, ' ');

      context.subscriptions.push(channelProvider);
    }

  }

  public static isWithinTag(prefix:string, document: vscode.TextDocument, position: vscode.Position) {
    let currentLine = position.line + 1;
    for (let index = currentLine; index >= 0; index--) {
      if (document.lineAt(new vscode.Position(index, 0)).text.includes(prefix)){
        return true;
      }
    }
  }

  public static isOutsideTag(prefix: string, document: vscode.TextDocument, position: vscode.Position) {
    let currentLine = position.line + 1;
    for (let index = currentLine; index >= 0; index--) {
      if (document.lineAt(new vscode.Position(index, 0)).text.includes(prefix)) {
        return true;
      }
    }
  }

}