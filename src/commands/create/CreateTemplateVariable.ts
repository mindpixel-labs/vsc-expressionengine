import * as vscode from 'vscode';

export default class CreateTemplateVariable {
  public static async run() {
    vscode.window.showInputBox({
      prompt: "Enter the name of the template variable.",
      placeHolder: "my_variable"
    }).then((info) => {
      console.log(info);
    });
  }
}