<?php
	$serverName = "103.9.157.198\MSSQLSERVER2012";
    $options = array(  "UID" => "gpm_codeGoldStar",  "PWD" => "GoldStar@1122",  "Database" => "gpm_codeGoldStar", 'CharacterSet' => 'UTF-8');
    
    $conn = sqlsrv_connect($serverName, $options);
?>