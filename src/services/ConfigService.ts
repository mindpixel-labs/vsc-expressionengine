import * as vscode from 'vscode';

export default class ConfigService {

  /**
   * The extension configuration object
  */
  static config: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('ee');
  
  /**
   * Check if user has suggestions enabled
   * 
   * @return boolean
   */
  public static suggestionsEnabled(): boolean {
    return ConfigService.config.get('suggestCompletions', true);
  }
}