<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $data = json_decode(file_get_contents('php://input'),true);
    $dienThoai = $data["sdtKH"];
    $maKHGT = $data["maKHGT"];
    $arr = array();

    if( $conn ) {
         
         $query="UPDATE GPM_KhachHang SET DiemTichLuy = DiemTichLuy + 3 WHERE DienThoai = '".$maKHGT."'";
         sqlsrv_query($conn,$query);

         $check = "SELECT * FROM GPM_KhachHang WHERE DienThoai = '".$dienThoai."'";
         $result = sqlsrv_query($conn,$check);
         $a= 0;
         while($row = sqlsrv_fetch_array($result)){
            $a = $row["ID"];
         }

         if($a != 0){
            $strqr = "UPDATE GPM_KhachHang SET DiemTichLuy = DiemTichLuy + 5, New = 0 WHERE New = 1 AND DienThoai = '".$dienThoai."'";
            sqlsrv_query($conn,$strqr);
         }else{
            $strqr = "INSERT INTO GPM_KhachHang (NgaySinh,DiemTichLuy,DienThoai,New) VALUES (getDate(),5,'".$dienThoai."',0)";
            sqlsrv_query($conn,$strqr);
         }
    }else{
    }
?>s