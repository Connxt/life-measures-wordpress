<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', 'C:\xampp\htdocs\life-measures-wordpress\wp-content\plugins\wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'quality_of_life_wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')c6|`|r.xbH;f$w,Xm]glm[}xK-)Ri-}Vc{4S1}|z`=&c17a*Hb+V+ljdvZde+])');
define('SECURE_AUTH_KEY',  'SkgZNXgateW)~8D><O~^X6Ku`;y%9S#7!{v#O+]I-aZ2YIl09z-HTa|[egkGv7-$');
define('LOGGED_IN_KEY',    '-_q](#+t{2f rVci} qT3ny4dKO#3Z*Qu$pzcZU{_3C`[=pSf,9b^~Ju.+&Cwz b');
define('NONCE_KEY',        '=F,)-3-v_R$O-cwdo1shoP+4?O.=~FL.CSt|a`,`F-(=D]nm5O.Yx)WL.gScZg53');
define('AUTH_SALT',        'FSDzWaSa&NT/;_I={j!w-m+Kr-$;G;_9~r|mB6>J9^:D3&U-WI$+F2_o|Jvv:-,5');
define('SECURE_AUTH_SALT', ']z-#eKpbuoKjnj5++&VxSyLv]J2<eW|9G*uSL7apNelazkVL1j_+hkY>G{yS 3OM');
define('LOGGED_IN_SALT',   '9J]6#~wru>LmSP2B*7z%7tqpS%E^O5T|IY22V=u);HI+pBo!|,39kMrlWnGI^>UC');
define('NONCE_SALT',       '=-$N^ |_/P6dZK4xrarZ|+pXo6K1?=m@++w-QeJv[c[!S;!)lDDa_EimO|Ia^7)G');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'lm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
