import { QuickPickItem } from "vscode";

const addonModel: QuickPickItem[] = [
  {
    label: 'Extension',
    description: 'Creates boilerplate for an extension'
  },
  {
    label: 'Module',
    description: 'Creates boilerplate for a module'
  },
  {
    label: 'Plugin',
    description: 'Creates boilerplate for a plugin'
  },
];

export {
  addonModel
};