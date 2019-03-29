import * as vscode from 'vscode';
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
  }
}