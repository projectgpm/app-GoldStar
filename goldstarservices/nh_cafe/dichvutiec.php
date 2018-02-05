<?php
    include '../lib/connect.php';
    include '../lib/class.php';

    if( $conn ) {
         $query='SELECT id, TieuDe, TomTat, HinhAnh, ChiTiet FROM tbl_hoatdong WHERE GhimBai = 1 AND IDHoatDong = 10';
         $result = sqlsrv_query($conn,$query);

         if($result != null){
             $row = sqlsrv_fetch_array($result);
             $h1= '<!DOCTYPE html>
                        <!-- saved from url=(0047)http://cvnsaovang.com/gio-mo-cua-cong-vien-nuoc -->
                        <html lang="vi" >
                        <head>
                            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                            
                            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans" rel="stylesheet">

                            <link rel="stylesheet" type="text/css" href="../../public/css/bootstrap.min.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/font-awesome.min.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/swiper.min.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/animate.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/shuffle.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/magnific-popup.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/owl.carousel.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/style.css">
                            <link rel="stylesheet" type="text/css" href="../../public/css/responsive.css">

                            
                        </head>

                        <body class="cbp-spmenu-push">
                            <section id="blog-post ">
                                <div class="col-md-12 post-content">';
            $h2 = '</div>
                            </section>
                        </body></html>';
             echo $h1 . $row["ChiTiet"] . $h2;

         }else echo "";

    }else{
         echo "";
         //die( print_r( sqlsrv_errors(), true));
    }
?>