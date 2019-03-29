import * as vscode from 'vscode';
import { AddonModel } from '../../models/addon';
import WorkspaceService from '../../services/WorkspaceService';

export default class CreateTemplatePartial {

  /**
   * Run the command logic
   */
  public static async run() {
    // Ensure the user has a workspace open before attempting to create anything
    if (!WorkspaceService.hasWorkspace()) {
      return;
    }

    let selection = await vscode.window.showQuickPick(AddonModel, { canPickMany: false }),
      templateType: string;

    // Ensure the user input is not empty
    if (selection !== undefined) {
      templateType = selection.label;
    }

    // Prompt the user to enter in a Namespace for the add-on
    vscode.window.showInputBox({
      prompt: "Enter the Namespace for the Add-on.",
      placeHolder: "Vendor\\Module",
    }).then((input) => {
      console.log((`Template ${input} was created!`));
    });
  }
}
