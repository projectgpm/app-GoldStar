<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $arr = array();

    if( $conn ) {
         
         $query='SELECT TOP 10 id, TieuDe, TomTat, HinhAnh FROM tbl_tuyendung WHERE TrangThai = 1 AND LoaiTuyenDung = 0';
         $result = sqlsrv_query($conn,$query);

		 if($result != null){

	         while ($row = sqlsrv_fetch_array($result)) {

	            array_push($arr, new TinTuc($row["id"],$row["TieuDe"],$row["TomTat"],"http://cvnsaovang.com/goldstarservices/tuyendung/tuyendung_noidung.php?id=".$row["id"],"http://cvnsaovang.com/public/upload/hinhanh/".$row["HinhAnh"]));
	         }
	         echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

	     }else echo "";

    }else{
         echo "";
         //die( print_r( sqlsrv_errors(), true));
    }
?>