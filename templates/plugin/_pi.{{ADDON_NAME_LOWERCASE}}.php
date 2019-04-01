<?php

/**
 * {{CLASS_NAME}} Class
 *
 * @package     ExpressionEngine
 * @category    Plugin
 * @author      {{VENDOR_NAME}}
 * @copyright   Copyright (c) {{VENDOR_NAME}}
 * @link        http://github.com/
 */


if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class {{CLASS_NAME}}
{
    public static $name         = '{{ADDON_NAME}}';
    public static $version      = '1.0.0';
    public static $author       = '{{VENDOR_NAME}}';
    public static $author_url   = '';
    public static $description  = '';
    public static $typography   = FALSE;

    /**
     * Class constructor
    */
    public function __construct(){}

    /**
     * Plugin method
     * 
     * The base
     * {exp:{{ADDON_NAME_LOWERCASE}}:method}
     */
    public function method(){
        // Implement your logic
    }
}


/* End of file pi.{{ADDON_NAME_LOWERCASE}}.php */
/* Location: ./system/user/addons/{{ADDON_NAME_LOWERCASE}}/pi.{{ADDON_NAME_LOWERCASE}}.php */
