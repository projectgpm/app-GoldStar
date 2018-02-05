<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $data = json_decode(file_get_contents('php://input'),true);
    $maKH = $data["maKH"];
    $arr = array();

    if( $conn ) {
        $query="SELECT ID,MaKhachHang,TenKhachHang,DienThoai,DiaChi,DiemTichLuy,CMND FROM GPM_KhachHang WHERE (MaKhachHang = '" .$maKH . "' OR DienThoai = '" .$maKH . "')";
        $result = sqlsrv_query($conn,$query);
        
        if($result != null){
            $row = sqlsrv_fetch_array($result);
            array_push($arr, new KhachHang($row["ID"],$row["MaKhachHang"],$row["TenKhachHang"],$row["DienThoai"],$row["DiaChi"], $row["DiemTichLuy"], "", $row["CMND"]));

            echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
        }else {
            echo $query;
        };
    }else{
         echo "";
    }
?>