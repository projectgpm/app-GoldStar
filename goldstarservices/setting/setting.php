<?php
    include '../lib/connect.php';
    include '../lib/class.php';
    $arr = array();

    if( $conn ) {
         
         $query='SELECT TOP 1 id,app_link_logo as link_menu_logo, app_link_bg as link_menu_bg, Title as tencongty,email,dienthoai,LinkMaps as link_maps FROM tbl_cauhinh';
         $result = sqlsrv_query($conn,$query);

		 if($result != null){

	         while ($row = sqlsrv_fetch_array($result)) {

                array_push($arr, new Setting($row["id"],"http://www.goldstarfinancial.com/images/logo.png","http://i.imgur.com/ABj5VlQ.jpg",
                    $row["tencongty"],$row["email"],$row["dienthoai"],"https://www.google.ca/maps/@10.3794324,105.4477224,17z","Mở cửa từ thứ 2 đến chủ nhật hàng tuần","https://www.facebook.com/cvnsaovang/","https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCwuVooFkU5ReKtLL9kabd8g&h=ATPg7z1GhJFeFsEBvwSYk1mB8sLm4B-hpHnGWRQFH8XyoqTyAImTDvm9phWtrasFX8PUUr4QyAhgtee-bY-Lm0YbATW8s8LE-ZvuAZ5xUuf-7aHQT2SoqYzeQJMBLarl4UZbw7NjOTYjHTfDQsE","https://www.facebook.com/gpm.vn/","http://cvnsaovang.com/goldstarservices/trangchu/gioithieu.php","",""));
	         }
	         echo json_encode($arr,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);

	     }else echo "";

    }else{
         echo "";
    }
?>