import * as vscode from 'vscode';
import * as fs from 'fs';
import WorkspaceService from '../../services/WorkspaceService';
import ValidationService from '../../services/ValidationService';

export default class CreateTemplatePartial {
  public static async run() {
    if (!WorkspaceService.hasWorkspace()) {
      return;
    }

    let validator = new ValidationService,
        templatePatialName: string | undefined,
        templatePath: string = WorkspaceService.getUserTemplatesDirectory();

    let options = {
      prompt: "Enter the name of the partial. The file extension will be appended for you.",
      placeHolder: "my_partial",
      validateInput: validator.validateTemplatePartial,
    };

    await vscode.window.showInputBox(options).then((input) => {
      templatePatialName = input;
    });

    if (templatePatialName === undefined || templatePatialName.trim().length === 0) {
      return;
    }
    // If everything passed go ahead and create the template partial
    let userFile = `${templatePath}/_partials/${templatePatialName}.html`;
    fs.openSync(userFile, 'a');
    // Open the newly created file within the editor
    vscode.workspace.openTextDocument(userFile).then(doc => {
      vscode.window.showTextDocument(doc);
    });
  }
}