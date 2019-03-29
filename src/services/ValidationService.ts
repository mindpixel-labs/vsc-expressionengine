import * as Validator from 'validatorjs';
import * as fs from 'fs';
import WorkspaceService from './WorkspaceService';

export default class ValidationService {
  /**
   * fileType
   * The file type as selected by the user
  */
  private _fileType: string = '';

  /**
   * templateGroup
   * The template group name as provided by the user
  */
  private _templateGroup: string = '';

  /**
   * Initialize custom validation rules
   */
  constructor(){
    // Register custom validator rules
    this.setRules();
  }

  /**
   * Get fileType
  */
  get fileType() {
    return this._fileType;
  }

  /**
   * Set fileType
  */
  set fileType(file:string) {
    this._fileType = file;
  }

  /**
   * Get templateGroup
  */
  get templateGroup() {
    return this._templateGroup;
  }

  /**
   * Set templateGroup
  */
  set templateGroup(group: string) {
    this._templateGroup = group;
  }

  /**
   * validateTemplateGroup
   * 
   * https://docs.expressionengine.com/latest/templates/overview.html#templates-are-saved-as-text-files
   */
  public validateTemplateGroup(template: string) {

    if (!template || template.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: template
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

  public validateTemplatePartial(partial: string) {

    if (!partial || partial.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: partial
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

  public validateTemplateVariable(partial: string) {

    if (!partial || partial.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: partial
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
   * https://docs.expressionengine.com/latest/templates/overview.html#templates-are-saved-as-text-files
   */
  public validateTemplateFile(template: string) {

    if (!template || template.trim().length === 0) {
      return 'Please provide a name';
    }

    let data = {
      name: template
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

  /**
   * Set Custom Validation Rules
   */
  private setRules() {
    Validator.register('valid_file_chars', (value, requirement, attribute) => {
      return /^[a-zA-Z0-9._-]*$/.test(value as string);
    }, '');

    Validator.register('valid_group_chars', (value, requirement, attribute) => {
      return /^[a-zA-Z0-9_-]*$/.test(value as string);
    }, '');

    Validator.register('unique_template', (file, requirement, attribute) => {
      let directory       = WorkspaceService.getUserTemplatesDirectory();
      let extension       = this.fileType;
      let group           = `${this.templateGroup}.group`;
      let fileToCreate    = `${directory}/${group}/${file}${extension}`;

      return !fs.existsSync(fileToCreate);
    }, '');

    Validator.register('unique_partial', (file, requirement, attribute) => {
      let directory = WorkspaceService.getUserTemplatesDirectory();
      let extension = this.fileType;
      let group = `${this.templateGroup}.group`;
      let fileToCreate = `${directory}/_partials/${file}.html`;

      return !fs.existsSync(fileToCreate);
    }, '');

    Validator.register('unique_variable', (file, requirement, attribute) => {
      let directory = WorkspaceService.getUserTemplatesDirectory();
      let extension = this.fileType;
      let group = `${this.templateGroup}.group`;
      let fileToCreate = `${directory}/_variables/${file}.html`;

      return !fs.existsSync(fileToCreate);
    }, '');
  }
}