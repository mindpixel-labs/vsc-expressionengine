import { QuickPickItem } from "vscode";

const AddonModel:QuickPickItem[] = [
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
  AddonModel
}