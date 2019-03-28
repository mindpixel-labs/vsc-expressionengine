import * as vscode from 'vscode';
import { AddonModel } from '../../models/addon';

export default class CreateTemplatePartial {

  /**
   * Run the command logic
   */
  public static async run() {
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
    }).then((info) => {
      console.log((`Template ${info}${templateType} was created!`));
    });
  }
}
