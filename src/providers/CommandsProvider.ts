import * as vscode from 'vscode';
import CreateTemplate from '../commands/create/CreateTemplate';
import CreateTemplatePartial from '../commands/create/CreateTemplatePartial';
import CreateTemplateVariable from '../commands/create/CreateTemplateVariable';
import CreateAddon from '../commands/create/CreateAddon';

export default class CommandsProvider {

  constructor(){}

  /**
   * Register commands
  */
  public static register(context?: vscode.ExtensionContext) {
    if(context !== undefined) {
      let subscriptions = context.subscriptions;
      subscriptions.push(vscode.commands.registerCommand('extension.ee.createTemplate', CreateTemplate.run));
  
      subscriptions.push(vscode.commands.registerCommand('extension.ee.createTemplatePartial', CreateTemplatePartial.run));
  
      subscriptions.push(vscode.commands.registerCommand('extension.ee.createTemplateVariable', CreateTemplateVariable.run));
  
      subscriptions.push(vscode.commands.registerCommand('extension.ee.createAddon', CreateAddon.run));
    }
  }
}