/**
 * Imports
*/
import * as vscode from 'vscode';
import IndentRulesProvider from './providers/IndentRulesProvider';
import CommandsProvider from './providers/CommandsProvider';
import CompletionProvider from './providers/CompletionProvider';
import ModifierCompletionProvider from './providers/ModifierCompletionProvider';
import ParametersProvider from './providers/ParameterProvider';
import GlobalVariableProvider from './providers/GlobalVariableProvider';

/**
 * Activate
 * 
 * This method is called when your extension is activated
 * 
 * @param context 
 */
export function activate(context: vscode.ExtensionContext) {
  CompletionProvider.register(context);
  ModifierCompletionProvider.register(context);
  ParametersProvider.register(context);
  GlobalVariableProvider.register(context);
  IndentRulesProvider.register(context);
  CommandsProvider.register(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
