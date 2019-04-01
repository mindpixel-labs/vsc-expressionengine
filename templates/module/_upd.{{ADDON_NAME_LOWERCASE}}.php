<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Module Update File
|--------------------------------------------------------------------------
|
| The Update file for a module includes a class with a name that is a
| combination of the package’s name with a _upd suffix. The first letter
| and only the first letter of the class name should be capitalized.
| There is only one required class variable is $version,
| which should indicate the current version of this module.
|
*/

class {{CLASS_NAME}}_upd
{
    /**
     * Module Name
     *
     * @var String
     */
    public $name = '{{CLASS_NAME}}';

    /**
     * Module Version
     *
     * @var Float
     */
    public $version = '1.0.0';

    /**
     * The Main Site ID
     *
     * @var Integer
     */
    public $site_id;

    /**
     * Constructor function
     *
     * Set dynamic variables
     * @return void
     */
    public function __construct()
    {
      $this->site_id = ee()->config->item('site_id');
    }

    /**
     * Installation Method
     *
     * @return  boolean
     */
    public function install()
    {
      $data = [
        'module_name'        => $this->name ,
        'module_version'     => $this->version,
        'has_cp_backend'     => 'y',
        'has_publish_fields' => 'y'
      ];

     ee()->db->insert('modules', $data);
      // Implement your install logic here
      return TRUE;
    }

    /**
     * Uninstall
     *
     * @return  boolean
     */
    public function uninstall()
    {
        // Remove Module info
        $module = ee('Model')->get('Module')->filter('module_name', $this->name)->first();
        $module->delete();
        // Implement additional uninstall logic here
        return TRUE;
    }

    /**
     * Module Updater
     *
     * @return  boolean
     */
     function update($current = '')
     {
         if (version_compare($current, '2.0', '='))
         {
             return FALSE;
         }

         if (version_compare($current, '2.0', '<'))
         {
             // Do your update code here
         }

         return TRUE;
     }
}

/* End of file upd.{{ADDON_NAME_LOWERCASE}}.php */
/* Location: /system/user/addons/{{ADDON_NAME_LOWERCASE}}/upd.{{ADDON_NAME_LOWERCASE}}.php */