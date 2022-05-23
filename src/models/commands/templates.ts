import { QuickPickItem } from "vscode";

const templateModel:QuickPickItem[] = [
  {
    label: '.html',
    description: 'Creates a webpage template type'
  },
  {
    label: '.css',
    description: 'Creates a css template type'
  },
  {
    label: '.js',
    description: 'Creates a js template type'
  },
  {
    label: '.feed',
    description: 'Creates an rss template type'
  },
  {
    label: '.xml',
    description: 'Creates an xml template type'
  }
];

export {
  templateModel
};