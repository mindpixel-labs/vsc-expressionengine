import * as vscode from 'vscode';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import WorkspaceService from '../../services/WorkspaceService';
import ValidationService from '../../services/ValidationService';

export default class CreateTemplateVariable {
  public static async run() {

    if (!WorkspaceService.hasWorkspace()) {
      return;
    }

    let validator = new ValidationService,
      templateVariableName: string | undefined,
      templatePath: string = WorkspaceService.getUserTemplatesDirectory();

    let options = {
      prompt: "Enter the name of the variable. The file extension will be appended for you.",
      placeHolder: "my_variable",
      validateInput: validator.validateTemplateVariable,
    };

    await vscode.window.showInputBox(options).then((input) => {
      templateVariableName = input;
    });

    if (templateVariableName === undefined || templateVariableName.trim().length === 0) {
      return;
    }

    // If everything passed go ahead and create the template and group if needed
    let userFile = `${templatePath}/_variables/${templateVariableName}.html`,
        partialsTemplateGroup = `${templatePath}/_variables/`;
    mkdirp(partialsTemplateGroup).then((made: any) => {
      fs.openSync(userFile, 'a');
      // Open the newly created file within the editor
      vscode.workspace.openTextDocument(userFile).then(doc => {
        vscode.window.showTextDocument(doc);
      });
    }).catch((error: any) => {
      if(error) {
        vscode.window.showWarningMessage(`The template variable could not be created: ${error}`);
        return false;
      }
    });
  }
}