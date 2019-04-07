/**
 * Imports
*/
import * as vscode from 'vscode';
import IndentRulesProvider from './providers/IndentRulesProvider';
import CommandsProvider from './providers/CommandsProvider';
import CompletionProvider from './providers/CompletionProvider';
import ParametersProvider from './providers/ParameterProvider';

/**
 * Activate
 * 
 * This method is called when your extension is activated
 * 
 * @param context 
 */
export function activate(context: vscode.ExtensionContext) {
  CompletionProvider.register(context);
  ParametersProvider.register(context);
  IndentRulesProvider.register(context);
  CommandsProvider.register(context);
}

/**
 * Deactive
 * 
 * Method is called when your extension is deactivated
 */
export function deactivate() {}
