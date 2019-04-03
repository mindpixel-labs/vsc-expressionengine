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

  let extensionIndentationRules   = new IndentRulesProvider(),
      extensionCommands           = new CommandsProvider(context);

      // Register language indentation rules
      extensionIndentationRules.register();

      // Register language commands
      extensionCommands.register();
}

/**
 * Deactive
 * 
 * Method is called when your extension is deactivated
 */
export function deactivate() {}
