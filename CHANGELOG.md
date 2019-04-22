# Change Log

All notable changes to the "vsc-expressionengine" extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2.0.4 - 2019-4-22
- Remove duplicate channel entry tag parameter orderby

## 2.0.3 - 2019-4-19
- Fixed a bug where if the cursor was at the end of a closing tag would still indent

## 2.0.2 - 2019-4-12
- Corrected spelling in the changelog file

## 2.0.1 - 2019-4-12
### Bug fix
- Corrected variable-tag syntax pattern to allow for parameters

## 2.0.0 - 2019-4-12
### New Features
- Added new IntelliSense features for code auto-completion!
- Improved syntax highlighting that now allows standard variables and tag pairs to be colored

### Fixes
- Fixed bugs with the HTML tag indenting

### Deprecations
- Removed channel entries snippets in favor of the IntelliSense auto-completion
- Removed keyword snippets in favor of the IntelliSense auto-completion

## 1.1.5 - 2019-4-4
### Bug Fixes
- Added a fix where a template group/template would not be created unless the group already existed.

## 1.1.4 - 2019-4-4
- Updated package.json description to remove the <br> tag that copied over from the README.md

## 1.1.3 - 2019-4-4
- Updated package.json to include new release description

## 1.1.2 - 2019-4-4
- Updated README.md image paths

## 1.1.1 - 2019-4-4
- Corrected Change Log and added missing entries

## 1.0.0 - 2019-4-4
### New Scaffolding Commands and Language Features!
- Added new scaffolding commands to generate ExpressionEngine boilerplate for Extensions, Plugins, Modules, Templates, Variables and Partials
- Added syntax highlighting improvements
- Added new indentation feature to allow for HTML to correctly indent and outdent lines when creating elements
- Overall code refactor and major performance boosts by switching to Webpack for the production build

## 0.0.7 - 2019-3-25
### Update layout.json
- Added fix for the layout tag pair where closing tag was missing a forward slash

## 0.0.6 - 2019-3-22
### Update the VSCODE Marketplace icon
- Added a new icon for the Visual Studio Code Marketplace

## 0.0.5 - 2019-3-22
### Update the README.md
- Added documentation to allow for Emmet to function properly for autocompletion

## 0.0.4 - 2019-3-22
### Update .vscodeignore
- Removed glob that caused the icon to not be found
- Included past changelog history

## 0.0.3 - 2019-3-22
### Update .vscodeignore
- Added glob to ignore the docs folder during extension installation

## 0.0.2 - 2019-3-22
### Updated package.json
- Updated the extensions displayName property

## 0.0.1 - 2019-3-22
### Initialize release
- Initial release of the VSC Extension