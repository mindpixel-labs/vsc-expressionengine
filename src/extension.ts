/**
 * Imports
*/
import * as vscode from 'vscode';
import CreateTemplate from './commands/create/CreateTemplate';
import CreateTemplatePartial from './commands/create/CreateTemplatePartial';
import CreateTemplateVariable from './commands/create/CreateTemplateVariable';
import CreateAddon from './commands/create/CreateAddon';

/**
 * Activate
 * 
 * This method is called when your extension is activated
 * 
 * @param context 
 */
export function activate(context: vscode.ExtensionContext) {  

  context.subscriptions.push(vscode.commands.registerCommand('extension.ee.createTemplate', CreateTemplate.run));

  context.subscriptions.push(vscode.commands.registerCommand('extension.ee.createTemplatePartial', CreateTemplatePartial.run));

  context.subscriptions.push(vscode.commands.registerCommand('extension.ee.createTemplateVariable', CreateTemplateVariable.run));

  context.subscriptions.push(vscode.commands.registerCommand('extension.ee.createAddon', CreateAddon.run));

}

/**
 * Deactive
 * 
 * Method is called when your extension is deactivated
 */
export function deactivate() {}
