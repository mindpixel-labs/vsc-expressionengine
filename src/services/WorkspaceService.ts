import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

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
   * @param {string} dirPath An optional setting to return a directory
   * @return {string} The users template directory path
   */
  public static getUserDirectory(dirPath:string = ''): string {
    let workspaceFolder: string = '',
        config = vscode.workspace.getConfiguration('ee');

    if (vscode.workspace.workspaceFolders !== undefined) {
      workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
    }

    // Set the directory and replace any trailing forward slashes
    let directory =  config.get('userPath', '${workspaceFolder}/system/user').replace('${workspaceFolder}', workspaceFolder).replace(/\/$/, '');

    return path.join(directory, dirPath);
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

    return this.getUserDirectory('templates/default_site');
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

  /**
   * siteDirectoryExists
   * 
   * @return {boolean} Checks if an ExpressionEngine site exists within the workspace
   */
  public static hasUserDirectory(): boolean {
    if (!fs.existsSync(this.getUserDirectory())) {
      vscode.window.showWarningMessage('The workspace you have open does not appear to contain an ExpressionEngine site. Make sure your ee.userPath is set properly in settings.json');
      return false;
    }
    return true;
  }
}