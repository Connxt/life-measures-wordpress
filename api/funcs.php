<?php
function keyCheck($key) {
	// Replaced and commented because of error
	// Error: Undefined index: HTTP_X_REQUESTED_WITH
	// if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')
	// 	return true;

	// Replaced code for the code above
	if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
		return true;
	}

	if (!$key)
		return false;

		$query_key = "
        SELECT
            *
        FROM
            `api_users`
        WHERE
            `key` = '$key' AND
            `validated` = '1' AND
            `active` = '1'
    ";
		$result_key = mysql_query($query_key);
		$num_rows_key = mysql_num_rows($result_key);

		return $num_rows_key;
}

function combine_arr($a, $b) {
	$acount = count($a);
	$bcount = count($b);
	$size = ($acount > $bcount) ? $bcount : $acount;
	$a = array_slice($a, 0, $size);
	$b = array_slice($b, 0, $size);
	return array_combine($a, $b);
}

function json_indent($json) {
	$result      = '';
	$pos         = 0;
	$strLen      = strlen($json);
	$indentStr   = '  ';
	$newLine     = "\n";
	$prevChar    = '';
	$outOfQuotes = true;

	for ($i=0; $i<=$strLen; $i++) {
		$char = substr($json, $i, 1);
		if ($char == '"' && $prevChar != '\\') {
			$outOfQuotes = !$outOfQuotes;
		} else if(($char == '}' || $char == ']') && $outOfQuotes) {
			$result .= $newLine;
			$pos --;
			for ($j=0; $j<$pos; $j++) {
				$result .= $indentStr;
			}
		}
		$result .= $char;
		if (($char == ',' || $char == '{' || $char == '[') && $outOfQuotes) {
			$result .= $newLine;
			if ($char == '{' || $char == '[') {
				$pos ++;
			}
			for ($j = 0; $j < $pos; $j++) {
				$result .= $indentStr;
			}
		}
		$prevChar = $char;
	}
	return $result;
}

function killIt($message = 'invalid search query.. please try again...') {
	die($message);
}

/*
 * returns object from DB if a matching path exists,
 * otherwise returns false
 * */

function cache_check($query) {
	$objQuery = mysql_query('SELECT results FROM api_results_cache WHERE path = "'.$query.'" LIMIT 0,1 ');
	if($objQuery) {
		$res = mysql_fetch_assoc($objQuery);
		return $res['results'];
	} else {
		return false;
	}
}

function getEncodedString($tmpEncString) {
	if(count($tmpEncString) == 1) {
		$tmpES = explode('/', $tmpEncString['path']);
		$i=0;
		foreach($tmpES as $tes) {
			if(substr($tes, 0, 4) == 'key:') {
				unset($tmpES[$i]);
			}
			$i++;
		}
		$output = implode(':', $tmpES);
	} else {
		unset($tmpEncString['key']);
		$tmpPath = str_replace("/", ":", $tmpEncString['path']);
		unset($tmpEncString['path']);
		$output = implode(':', array_map(function ($v, $k) { return $k . ':' . $v; }, $tmpEncString, array_keys($tmpEncString)));
	}

	$buildEncodedCall = trim($tmpPath, ':').trim($output, ':');
	$encodedPath = md5($buildEncodedCall);
	return $encodedPath;
}

function multi_sort($array, $key) {
	$cmp_val="((\$a['$key']>\$b['$key'])?1:
    ((\$a['$key']==\$b['$key'])?0:-1))";
	$cmp=create_function('$a, $b', "return $body;");
	uasort($array, $cmp);
	return $array;
}

?>