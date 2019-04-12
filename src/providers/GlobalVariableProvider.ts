import * as vscode from 'vscode';
import * as GlobalVariables from '../models/variables/variables.model';
import ConfigService from '../services/ConfigService';

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

    // Disable suggestions if the user has turn them off
    if (!ConfigService.suggestionsEnabled()) {
      return Promise.resolve([]);
    } 

    // The global ExpressionEngine variables
    let variables = GlobalVariables.default;

    // Array of completion items
    let completions: vscode.CompletionItem[] = [];

    // Build the completion items
    for (let variable in variables) {
      // Create new CompletionItem instance and set the name
      let completion = new vscode.CompletionItem(variable);
      // Set the icon/completion type
      completion.kind = vscode.CompletionItemKind.Property;
      // If variable has a snippet set it
      if(variables[variable]['snippet'] !== '') {
        completion.insertText = new vscode.SnippetString(variables[variable]['snippet']);
      }
      // Push the completion item to the array
      completions.push(completion);
    }

    // Create the provider
    const variableProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'ee' }, {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
        
        // Grab the current line where the trigger was invoked and trim all white space
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

    // Push subscription
    context.subscriptions.push(variableProvider);

  }
}