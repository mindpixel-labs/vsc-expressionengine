import * as vscode from 'vscode';

export default class WorkspaceService {
  public static getWorkspaceFolderPath(): string {
    let workspaceFolder: string = '';

    if (vscode.workspace.workspaceFolders !== undefined) {
      workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
    }
      return workspaceFolder;
  }

  public static getUserTemplatesDirectory() {
    let workspaceFolder: string = '';
    let config = vscode.workspace.getConfiguration('ee');

    if (vscode.workspace.workspaceFolders !== undefined) {
      workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
    }

    return config.get('templatePath', '${workspaceFolder}/system/user/templates/default_site').replace('${workspaceFolder}', workspaceFolder);
  }
  public static hasWorkspace() {
    // Ensure the user has a workspace open before attempting to create anything
    if (vscode.workspace.workspaceFolders === undefined) {
      vscode.window.showWarningMessage('You are currently not within a workspace. Please add a workspace that contains an ExpressionEngine project.');
      return false;
    } else {
      return true;
    }
  }
}