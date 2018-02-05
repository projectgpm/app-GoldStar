<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $data = json_decode(file_get_contents('php://input'),true);
    $idKH = $data["idKH"];
    $arr = array();

    if( $conn ) {
        $query="SELECT SoDiemCu, SoDiemMoi,NoiDung FROM GPM_LichSuQuyDoiDiem WHERE (IDKhachHang = '"+ $idKH+"')";
        $result = sqlsrv_query($conn,$query);
        
        if($result != null){
            while($row = sqlsrv_fetch_array($result))
            	array_push($arr, new LichSuQuyDoiDiem($row["SoDiemCu"],$row["SoDiemMoi"],$row["NoiDung"]));

            echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
        }else {
            echo $query;
        };
    }else{
         echo "";
    }
?>