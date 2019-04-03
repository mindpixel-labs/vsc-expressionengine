<?php

/**
 * {{CLASS_NAME}}_ext Class
 *
 * @package     ExpressionEngine
 * @category    Extension
 * @author      {{VENDOR_NAME}}
 * @copyright   Copyright (c) {{VENDOR_NAME}}
 * @link        http://github.com/
 */

class {{CLASS_NAME}}_ext {

    /**
     * Name
     */
    public $name = '{{ADDON_NAME}}';

    /**
     * Version
     */
    public $version = '1.0.0';

    /**
     * Description
     */
    public $description = '';

    /**
     * Settings Exist
     */
    public $settings_exist = 'n';

    /**
     * Docs URL
     */
    public $docs_url  = '';

    /**
     * Settings
     */
    public $settings = [];

    /**
     * Constructor
     *
     * @param mixed Settings array or empty string if none exist.
     */
    function __construct($settings = '')
    {
        $this->settings = $settings;
    }

    /**
     * Activate Extension
     *
     * This function enters the extension into the exp_extensions table
     *
     * @see https://ellislab.com/codeigniter/user-guide/database/index.html for
     * more information on the db class.
     *
     * @return void
     */
    function activate_extension()
    {
        // Register extension hooks
        $hooks = [
          'hook' => 'method_to_execute'
        ];

        foreach($hooks as $hook => $method) {
          $data = array(
            'class'     => __CLASS__,
            'method'    => $method,
            'hook'      => $hook,
            'settings'  => serialize($this->settings),
            'priority'  => 10,
            'version'   => $this->version,
            'enabled'   => 'y'
          );

          ee()->db->insert('extensions', $data);
        }
    }

    /**
     * Example Hook
     *
     * Method to fire when the hook is called
     *
     * @return void
     */
    public function method_to_execute()
    {
      // Logic here
    }

    /**
     * Settings
     *
     * Build the extension settings form
     *
     * @return void
     */
    public function settings()
    {
      $settings = [];

      return $settings;
    }

    /**
     * Update Extension
     *
     * This function performs any necessary db updates when the extension
     * page is visited
     *
     * @return  mixed   void on update / false if none
     */
    public function update_extension($current = '')
    {
        if ($current == '' OR $current == $this->version)
        {
            return FALSE;
        }

        if ($current < '1.0.0')
        {
            // Update to version 1.0.0
        }

        ee()->db->where('class', __CLASS__);
        ee()->db->update(
                    'extensions',
                    array('version' => $this->version)
        );
    }

    /**
     * Disable Extension
     *
     * This method removes information from the exp_extensions table
     *
     * @return void
     */
    public function disable_extension()
    {
        ee()->db->where('class', __CLASS__);
        ee()->db->delete('extensions');
    }

}
