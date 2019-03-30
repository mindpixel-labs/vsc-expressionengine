import * as vscode from 'vscode';
import * as fs from 'fs';
import {TemplateModel} from '../../models/templates';
import ValidationService from '../../services/ValidationService';
import WorkspaceService from '../../services/WorkspaceService';

export default class CreateTemplate {

  /**
   * Run the command logic
   */
  public static async run() {
    // Ensure the user has a workspace open before attempting to create anything
    if (!WorkspaceService.hasWorkspace()) {
      return;
    }

    let validator           = new ValidationService,
        templatePath        : string = WorkspaceService.getUserTemplatesDirectory(),
        templateType        : string,
        templateFileName    : string|undefined,
        templateGroupName   : string|undefined;

    // Set the workspace folder
    let templateTypeSelection = await vscode.window.showQuickPick(
      TemplateModel, {
        canPickMany: false
      }
    );

    // Ensure the user input is not empty
    if (templateTypeSelection !== undefined) {
      templateType = templateTypeSelection.label;
      validator.fileExtension = templateType;
    } else {
      return;
    }

    let templateGroupOptions: vscode.InputBoxOptions = {
      prompt        : "Enter the name of the template group.",
      placeHolder   : "blog",
      validateInput : validator.validateTemplateGroup,
    };

    // Prompt the user to enter in a name for the template group
    await vscode.window.showInputBox(templateGroupOptions).then((value) => {
      templateGroupName = value;
    });

    if (templateGroupName === undefined || templateGroupName.trim().length === 0 ) {
      return;
    }

    validator.templateGroup = templateGroupName;

    let templateFileOptions: vscode.InputBoxOptions = {
      prompt        : "Enter the name of the template file.",
      placeHolder   : "blog-index",
      validateInput : validator.validateTemplateFile,
    };

    // Prompt the user to enter in a name for the template file
    await vscode.window.showInputBox(templateFileOptions).then((value) => {
      templateFileName = value;
    });

    if (templateFileName === undefined || templateFileName.trim().length === 0) {
      return;
    }
    // If everything passed go ahead and create the template and group if needed
    let userFile = `${templatePath}/${templateGroupName}.group/${templateFileName}${templateType}`;
    fs.openSync(userFile, 'a');
    // Open the newly created file within the editor
    vscode.workspace.openTextDocument(userFile).then(doc => {
      vscode.window.showTextDocument(doc);
    });
  }
}
