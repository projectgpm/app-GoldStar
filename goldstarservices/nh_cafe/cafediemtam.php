<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $arr = array();

    if( $conn ) {
         
         $query='SELECT id, TenHangHoa, GiaBan FROM CF_HangHoa WHERE DaXoa = 0';
         $result = sqlsrv_query($conn,$query);

         if($result != null){

             while ($row = sqlsrv_fetch_array($result)) {

                array_push($arr, new MenuMonAn($row["id"],$row["TenHangHoa"],$row["GiaBan"],"http://bepvang.org.vn/Userfiles/Upload/images/Download/2016/8/4/a94990116a6b48668ac78d90d6cfdd71.jpg"));
             }
             echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

         }else echo "";

    }else{
         echo "";
         //die( print_r( sqlsrv_errors(), true));
    }
?>