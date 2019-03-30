import * as Validator from 'validatorjs';
import * as fs from 'fs';
import WorkspaceService from './WorkspaceService';

export default class ValidationService {

  /**
   * fileExtension
   * @type {string} The file type selected by the user
  */
  private _fileExtension: string = '';

  /**
   * templateGroup
   * 
   * @type {string} The template group name provided by the user
  */
  private _templateGroup: string = '';

  /**
   * userTemplatesDirectory
   * @type {string} The users ExpressionEngine Template Directory
  */
  public userTemplatesDirectory: string = '';

  /**
   * Initialize the validation service
   */
  constructor(){
    // Register the current workspace
    this.userTemplatesDirectory = WorkspaceService.getUserTemplatesDirectory();
    // Register custom validator rules
    this.registerValidationRules();
  }

  /**
   * Get fileExtension
   * @return {string} The file extension type for a template {.html, .css, .xml, .feed, .js}
  */
  get fileExtension() {
    return this._fileExtension;
  }

  /**
   * Set fileExtension
   * @param {string} value The file extension type for a template {.html, .css, .xml, .feed, .js}
  */
  set fileExtension(value:string) {
    this._fileExtension = value;
  }

  /**
   * Get templateGroup
   * @return {string} A template group name provided by the user
  */
  get templateGroup() {
    return this._templateGroup;
  }

  /**
   * Set templateGroup
  */
  set templateGroup(value: string) {
    this._templateGroup = value;
  }

  /**
   * Registers Custom Validation Rules
   * @constructor
   */
  private registerValidationRules() {
    Validator.register('valid_file_chars', (value, requirement, attribute) => {
      return /^[a-zA-Z0-9._-]*$/.test(value as string);
    }, '');

    Validator.register('valid_group_chars', (value, requirement, attribute) => {
      return /^[a-zA-Z0-9_-]*$/.test(value as string);
    }, '');

    Validator.register('unique_template', (file, requirement, attribute) => {
      let fileToCreate = `${this.userTemplatesDirectory}/${this.templateGroup}.group/${file}${this.fileExtension}`;
      return !fs.existsSync(fileToCreate);
    }, '');

    Validator.register('unique_partial', (file, requirement, attribute) => {
      let fileToCreate = `${this.userTemplatesDirectory}/_partials/${file}.html`;
      return !fs.existsSync(fileToCreate);
    }, '');

    Validator.register('unique_variable', (file, requirement, attribute) => {
      let fileToCreate = `${this.userTemplatesDirectory}/_variables/${file}.html`;
      return !fs.existsSync(fileToCreate);
    }, '');
  }

  /**
   * validateTemplateGroup
   * 
   * @param {string} value The value sent in from vscode.InputBoxOptions
   * @link https://docs.expressionengine.com/latest/templates/overview.html#templates-are-saved-as-text-files
   * @return {string} Return undefined, null, or the empty string when 'value' is valid.
   */
  public validateTemplateGroup(value: string) {

    if (!value || value.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: value
    }

    let rules: Validator.Rules = {
      name: 'required|max:50|valid_group_chars',
    }

    let messages = {
      'required.name'               : 'You must supply a name.',
      'valid_group_chars.name'      : 'The name must contain only letters, numbers, dashes, underscores.',
      'max'                         : 'Template Group and Template Files are limited to 50 characters.'
    };

    let validation = new Validator(data, rules, messages);

    if ( validation.fails() ) {
      let validationResult = validation.errors.first('name');
      return validationResult as string;
    } else {
      return '';
    }
  }

  /**
   * validateTemplatePartial
   * 
   * @param {string} value The value sent in from vscode.InputBoxOptions
   * @link https://docs.expressionengine.com/latest/templates/overview.html#templates-are-saved-as-text-files
   * @return {string} Return undefined, null, or the empty string when 'value' is valid.
   */
  public validateTemplatePartial(value: string) {

    if (!value || value.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: value
    };

    let rules: Validator.Rules = {
      name: 'required|max:50|valid_group_chars|unique_partial',
    }

    let messages = {
      'required.name'             : 'You must supply a name.',
      'valid_group_chars.name'    : 'The name submitted may only contain alpha-numeric characters, underscores, and dashes',
      'max'                       : 'Template Partials are limited to 50 characters.',
      'unique_partial.name'       : 'The template partial provided already exists.'
    };

    let validation = new Validator(data, rules, messages);

    if (validation.fails()) {
      let validationResult = validation.errors.first('name');
      return validationResult as string;
    } else {
      return '';
    }
  }

  /**
   * validateTemplateVariable
   * 
   * @param {string} value The value sent in from vscode.InputBoxOptions
   * @link https://docs.expressionengine.com/latest/templates/overview.html#templates-are-saved-as-text-files
   * @return {string} Return undefined, null, or the empty string when 'value' is valid.
   */
  public validateTemplateVariable(value: string) {

    if (!value || value.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: value
    };

    let rules: Validator.Rules = {
      name: 'required|max:50|valid_group_chars|unique_variable',
    }

    let messages = {
      'required.name': 'You must supply a name.',
      'valid_group_chars.name': 'The name submitted may only contain alpha-numeric characters, underscores, and dashes',
      'max': 'Template Variables are limited to 50 characters.',
      'unique_variable.name': 'The template partial provided already exists.'
    };

    let validation = new Validator(data, rules, messages);

    if (validation.fails()) {
      let validationResult = validation.errors.first('name');
      return validationResult as string;
    } else {
      return '';
    }
  }

  /**
   * validateTemplateFile
   * 
   * @param {string} value The value sent in from vscode.InputBoxOptions
   * @link https://docs.expressionengine.com/latest/templates/overview.html#templates-are-saved-as-text-files
   * @return {string} Return undefined, null, or the empty string when 'value' is valid.
   */
  public validateTemplateFile(value: string) {

    if (!value || value.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: value
    }

    let rules: Validator.Rules = {
      name: 'required|max:50|valid_file_chars|unique_template',
    }

    let messages = {
      'required.name'           : 'You must supply a name.',
      'valid_file_chars.name'   : 'The name must contain only letters, numbers, dashes, underscores and dots.',
      'unique_template.name'    : 'The template name provided already exists.',
      'max'                     : 'Template Group and Template Files are limited to 50 characters.'
    };

    let validation = new Validator(data, rules, messages);

    if (validation.fails()) {
      let validationResult = validation.errors.first('name');
      return validationResult as string;
    } else {
      return '';
    }
  }
}