<br>
<div align="center">

# vsc-expressionengine
![](https://img.shields.io/badge/Status-Maintained-brightgreen.svg)
![](https://img.shields.io/visual-studio-marketplace/v/mindpixel-labs.vsc-expressionengine.svg?color=brightgreen&label=Visual%20Studio%20Marketplace&logo=Visual%20Studio%20Code)
![](https://img.shields.io/github/issues/mindpixel-labs/vsc-expressionengine.svg)
![](https://img.shields.io/badge/license-MIT-brightgreen.svg)

The ultimate **ExpressionEngine CMS** extension for Visual Studio Code <br> with scaffolding commands to generate add-ons and template files, syntax highlighting and snippets.

<br>

### Generate Add-ons


![](https://raw.githubusercontent.com/mindpixel-labs/vsc-expressionengine/master/docs/images/vsc-ee-addon.gif)

### Snippets and Syntax Highlighting

![](https://raw.githubusercontent.com/mindpixel-labs/vsc-expressionengine/master/docs/images/vsc-ee-syntax-snippets.gif)

</div>

## Getting Started
Make sure to update your user **settings.json** to include the extensions language identifier for both ExpressionEngine and HTML files so that Emmet can autocomplete properly.

```javascript
    "emmet.includeLanguages": {
        "ee": "html"
    }
```

## Setup ExpressionEngine Paths
By default, this extension assumes the directory to your add-ons and template files will be based on a fresh install of an ExpressionEngine site.

**Example:** `<project-directory>/system/user/**`

If you have changed your projects directory structure you have the option to override this within your user **settings.json** file. Just include the **${workspaceFolder}** variable at the beginning of your definition so the project's path you currently have open within the workspace will be dynamically resolved.

```javascript
  "ee.userPath" : "${workspaceFolder}/system/user"
```

The above example would resolve to something like: `/Users/your-name/sites/my-site/system/user`

**Note:** Only one workspace is supported at this time.

## Commands
All commands start within the `EE` namespace. Visual Studio Code will however correctly pull up the commands even if you type it in lowercase. Also, while the full name of the commands appears long, the editor will match shorter typings like `ee addon-on`, `ee partial` etc.

| Command | Description |
|--- | --- |
<sub>EE: Create Add-on Boilerplate</sub> | <sub>List of options to create an Extension, Module or Plugin.</sub> |
<sub>EE: Create Template</sub> | <sub>A template type either `.html`, `.css`, `.js`, `.feed`, or `.xml`</sub>|
<sub>EE: Create Template Variable</sub> | <sub>Input requesting a template variable name. Outputs to your `_variables` directory.</sub>|
<sub>EE: Create Template Partial</sub>| <sub>Input requesting a template partial name. Outputs to your `_partials` directory.</sub>|


**Note:**
When creating template variables or partials you can omit the `.html` extension as this will be automatically appended for you. You only need to provide a name that matches the allowed characters. 

**Known Limitations:**
After creating either a template, variable or partial you can still delete it from the sidebar tree in your editor as long as you don't refresh your local site either in the Control Panel or the front-end as this will cause EE to pull the latest files and sync to the database. The best option for deleting or renaming your files is likely best done within the Control Panel.

## Customizing Colors
You can customize your active color theme by adding the `editor.tokenColorCustomizations` property to your **settings.json**.

```javascript
    "editor.tokenColorCustomizations": {
        "textMateRules": [{
            "scope": "entity.name.tag.ee",
            "settings": {
                "foreground": "#B67FFF"
            }
        }]
    }
```

View the full list of available [scope names](https://github.com/mindpixel-labs/vsc-expressionengine/wiki/Scope-Names) to override.

## Development Roadmap
- Providing code completion packages that can additionally installed for all the major third party add-ons!
- Add error diagnostics to help prevent templating code errors or catch bugs
- Improving embedded ExpressionEngine tag syntax highlighting within HTML markup

## Documentation
View the full [wiki](https://github.com/mindpixel-labs/vsc-expressionengine/wiki) to learn about all the available options.

## Contributors Welcome!
This package is still fairly new so if you find a bug or something that could be improved upon, please let us know or submit a PR. Issues and PRs will be reviewed as soon as they can. Your support is very much appreciated!

## Pull Request Guidelines
If you are planning to make significant changes to the code or add a major feature, please check the following first:

* Check for duplicate work or issues where people may already be working on the issue/feature in question.
* Discussions are encouraged. Work together with others to come up with a solid solution prior to starting on your own implementation.
* If a PR seems to be the best option, then please follow the provided pull request template.

We do not want to reject a pull request that had major effort or work involved because the guidelines above were not followed or the wrong approach was made.

Enjoy!

## Disclaimer
This is an unofficial Visual Studio Code Extension and is in no way affiliated, sponsored by or approved by EllisLab Corp, the makers of ExpressionEngine CMS. The ExpressionEngine mark is owned and registered by EllisLab, Inc.
