<?php

/**
 * {{ADDON_NAME}} Class
 *
 * @package     ExpressionEngine
 * @category    Plugin
 * @author      {{VENDOR_NAME}}
 * @copyright   Copyright (c) {{VENDOR_NAME}}
 * @link        http://github.com/
 */


if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class {{ADDON_NAME}}
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
     * {exp:{{ADDON_NAME}}:method}
     */
    public function method(){

        // Variables Array
        $variables = [];
        
        // Set Total Results Variable
        $variables[0]['title'] = 'It works!';

        return ee()->TMPL->parse_variables( ee()->TMPL->tagdata, $variables );
    }
}


/* End of file pi.utilities.php */
/* Location: ./system/user/addons/{{ADDON_NAME}}/pi.{{ADDON_NAME}}.php */
