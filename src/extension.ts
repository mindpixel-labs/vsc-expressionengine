/**
 * Imports
*/
import * as vscode from 'vscode';
import IndentRulesProvider from './providers/IndentRulesProvider';
import CommandsProvider from './providers/CommandsProvider';

/**
 * Activate
 * 
 * This method is called when your extension is activated
 * 
 * @param context 
 */
export function activate(context: vscode.ExtensionContext) {
  IndentRulesProvider.register(context);
  CommandsProvider.register(context);
}

/**
 * Deactive
 * 
 * Method is called when your extension is deactivated
 */
export function deactivate() {}
