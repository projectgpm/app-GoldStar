<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $arr = array();

    if( $conn ) {
         
         $strBaiGhim='SELECT id, TieuDe, TomTat, HinhAnh FROM tbl_khuyenmai WHERE GhimBai = 1';
         $resultBaiGhim = sqlsrv_query($conn,$strBaiGhim);

		 if($resultBaiGhim != null){

	         while ($row = sqlsrv_fetch_array($resultBaiGhim)) {

	            array_push($arr, new TinTuc($row["id"],$row["TieuDe"],$row["TomTat"],"http://cvnsaovang.com/goldstarservices/cvn/khuyenmai_noidung.php?id=".$row["id"],"http://cvnsaovang.com/public/upload/hinhanh/".$row["HinhAnh"]));
	         }
	     }

        $strBaiViet ='SELECT TOP 5 id, TieuDe, TomTat, HinhAnh FROM tbl_khuyenmai WHERE GhimBai != 1';
        $resultBaiViet = sqlsrv_query($conn,$strBaiViet);

        if($resultBaiViet != null){
             while ($row1 = sqlsrv_fetch_array($resultBaiViet)) {

                array_push($arr, new TinTuc($row1["id"],$row1["TieuDe"],$row1["TomTat"],"http://cvnsaovang.com/goldstarservices/cvn/khuyenmai_noidung.php?id=".$row1["id"],"http://cvnsaovang.com/public/upload/hinhanh/".$row1["HinhAnh"]));
             }

             echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

         }echo "";

    }else{
         echo "";
         //die( print_r( sqlsrv_errors(), true));
    }
?>