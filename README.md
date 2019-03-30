# vsc-expressionengine
![](https://img.shields.io/badge/Status-Maintained-brightgreen.svg)
![](https://img.shields.io/visual-studio-marketplace/v/mindpixel-labs.vsc-expressionengine.svg?color=brightgreen&label=Visual%20Studio%20Marketplace&logo=Visual%20Studio%20Code)
![](https://img.shields.io/github/issues/mindpixel-labs/vsc-expressionengine.svg)
![](https://img.shields.io/badge/license-MIT-brightgreen.svg)

The ultimate **ExpressionEngine CMS** extension for Visual Studio Code with syntax highlighting and snippets.

This is a port of our atom-expressionengine package for Atom Editor. New features and improvements are planned.

![](https://raw.githubusercontent.com/mindpixel-labs/vsc-expressionengine/master/docs/images/vsc-ee-syntax.png)

## Getting Started
Make sure to update your user **settings.json** to include the extensions language indentifier for both ExpressionEngine and HTML files so that Emmet can autocomplete properly.

```javascript
    "emmet.includeLanguages": {
        "ee": "html"
    }
```

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
This is an unofficial Visual Studio Code Extension and is in no way affiliated, sponsored by or approved by EllisLab Corp, the makers of ExpressionEngine CMS.
