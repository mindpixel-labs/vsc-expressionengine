import * as vscode from 'vscode';
import { AddonModel } from '../../models/addon';
import WorkspaceService from '../../services/WorkspaceService';
import ValidationService from '../../services/ValidationService';
import FormatService from '../../services/FormatService';
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

    let userAddonDir      : string,
    extensionDir          : string = '',
    templateToCopy        : string = '';

    // Show selection list for user to choose their add-on type
    let selection = await vscode.window.showQuickPick(AddonModel, { canPickMany: false }),
        addonType : string = '';

    // Ensure the user input is not empty
    if (selection === undefined) {
      return;
    }

    // Assign the add-on type
    addonType = selection.label;

    // Create validator service instance and get user add-ons directory
    let validator   = new ValidationService,
        formatter   = new FormatService,
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
    
    // Do not continue if the vendorName was blank
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

    // Do not continue if the addonName was blank
    if (addonName === undefined || addonName.trim().length === 0) {
      return;
    }
    
    // Set the add-ons directory path
    addonDir = WorkspaceService.getUserDirectory(`addons/${addonName.toLowerCase()}`);

    // Get the extension object
    const Extension = vscode.extensions.getExtension('mindpixel-labs.vsc-expressionengine');

    if(Extension !== undefined) {
      templateToCopy = path.join(Extension.extensionPath, `templates/${addonType.toLowerCase()}`);
    }

    // Template variables
    let vars = {
      VENDOR_NAME: vendorName,
      CLASS_NAME: formatter.capitalizeFirstLetter(addonName),
      ADDON_NAME: addonName,
      ADDON_NAME_LOWERCASE: addonName.toLowerCase(),
      NAMESPACE: `${vendorName}\\${formatter.toClassName(addonName)}`
    };

    const copy = require('copy-template-dir');
    
    // Parse template files and copy to the user add-ons directory
    copy(templateToCopy, addonDir, vars, (err:any, createdFiles:Array<any>) => {
      if (err) {
        vscode.window.showErrorMessage(err as string);
        console.log(err as string);
      }
    });

  }
}
