import * as vscode from 'vscode';

export default class WorkspaceService {

  /**
   * getWorkspaceFolderPath
   * 
   * @return {string} The usrs current workspace path
   */
  public static getWorkspaceFolderPath(): string {
    let workspaceFolder: string = '';

    if (vscode.workspace.workspaceFolders !== undefined) {
      workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
    }
      return workspaceFolder;
  }

  /**
   * getUserDirectory
   * @param {string} path An optional setting to return a directory
   * @return {string} The users template directory path
   */
  public static getUserDirectory(path?:string): string {
    let workspaceFolder: string = '',
        config = vscode.workspace.getConfiguration('ee');

    if (vscode.workspace.workspaceFolders !== undefined) {
      workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
    }

    // Set the directory and replace any trailing forward slashes
    let directory =  config.get('userPath', '${workspaceFolder}/system/user').replace('${workspaceFolder}', workspaceFolder).replace(/\/$/, '');

    if(path !== undefined && path !== '') {
      directory = `${directory}/${path}`;
    }

    return directory;
  }

  /**
   * getUserTemplatesDirectory
   * @return {string} The users template directory path
   */
  public static getUserTemplatesDirectory(directory?:string): string {
    let workspaceFolder: string = '';
    let config = vscode.workspace.getConfiguration('ee');

    if (vscode.workspace.workspaceFolders !== undefined) {
      workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
    }

    return config.get('templatePath', '${workspaceFolder}/system/user/templates/default_site').replace('${workspaceFolder}', workspaceFolder).replace(/\/$/, '');
  }

  /**
   * hasWorkspace
   * 
   * @return {boolean} Checks if the user has an active workspace open
   */
  public static hasWorkspace(): boolean {
    // Ensure the user has a workspace open before attempting to create anything
    if (vscode.workspace.workspaceFolders === undefined) {
      vscode.window.showWarningMessage('You are currently not within a workspace. Please add a workspace that contains an ExpressionEngine project.');
      return false;
    } else {
      return true;
    }
  }
}