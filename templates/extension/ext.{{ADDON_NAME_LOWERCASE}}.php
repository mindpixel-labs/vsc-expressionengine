<?php

class {{CLASS_NAME}}_ext {

    /**
     * Name
     */
    public $name = '{{ADDON_NAME}}';

    /**
     * Version
     */
    public $version = '0.1.0';

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
        // All extension hooks
        $hooks = [
          'ee_hook' => 'my_hook'
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
     * Set the emails via the POST data based on the store location
     *
     * @return void
     */
    public function my_hook()
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
