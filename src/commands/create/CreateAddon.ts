import * as vscode from 'vscode';
import { AddonModel } from '../../models/addon';
import WorkspaceService from '../../services/WorkspaceService';
import ValidationService from '../../services/ValidationService';
import * as path from 'path';

export default class CreateTemplatePartial {

  /**
   * Run the command logic
   */
  public static async run() {

    // Ensure the user has a workspace open before attempting to create anything
    if (!WorkspaceService.hasWorkspace()) {
      return;
    }

    let copy                  = require('copy-template-dir'),
        extensionDir          : string = '',
        extensionTemplateDir  : string = '';

    const Extension = vscode.extensions.getExtension('mindpixel-labs.vsc-expressionengine');

    if(Extension !== undefined) {
      extensionTemplateDir = path.join(Extension.extensionPath, 'templates');
    }
 
    // copy(inDir, outDir, vars, (err:any, createdFiles:Array<any>) => {
    //   console.log(err);
    // })

    // Show selection list for user to choose their add-on type
    let selection = await vscode.window.showQuickPick(AddonModel, { canPickMany: false }),
        addonType: string = '';

    // Ensure the user input is not empty
    if (selection === undefined) {
      return;
    }

    // Assign the add-on type
    addonType = selection.label;

    // Create validator service instance and get user add-ons directory
    let validator   = new ValidationService,
        addonDir    = WorkspaceService.getUserDirectory('addons'),
        vendorName  : string|undefined,
        addonName   : string|undefined;

    // Prompt the user to enter in a Namespace for the add-on
    await vscode.window.showInputBox({
      prompt: "Enter your vendor namespace",
      placeHolder: "MyVendorName",
      ignoreFocusOut: true,
      validateInput: validator.validateVendorName
    }).then((input) => {
      vendorName = input;
    });

    if (vendorName === undefined || vendorName.trim().length === 0) {
      return;
    }

    // Prompt the user to enter in a name for their add-on
    await vscode.window.showInputBox({
      prompt: "Enter your add-on name",
      placeHolder: `my_${addonType.toLowerCase()}`,
      ignoreFocusOut: true,
      validateInput: validator.validateAddonName
    }).then((input) => {
      addonName = input;
    });

    if (addonName === undefined || addonName.trim().length === 0) {
      return;
    }
  }
}
