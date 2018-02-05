<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $arr = array();

    if( $conn ) {
         
         $query='SELECT id, HinhAnh FROM tbl_slide WHERE TrangThai = 1 AND HienThi = 1';
         $result = sqlsrv_query($conn,$query);

		 if($result != null){

	         while ($row = sqlsrv_fetch_array($result)) {

                array_push($arr, new Slider_Img($row["id"],"http://cvnsaovang.com/public/upload/slide/".$row["HinhAnh"]));
	         }
	         echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

	     }else echo "";

    }else{
         echo "";
    }
?>