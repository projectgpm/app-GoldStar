<?php

	// Setting...
    class Setting
    {
    	var $id;
    	var $link_menu_logo;
        var $link_menu_bg;
        var $tencongty;
        var $email;
        var $dienthoai;
        var $link_maps;
        var $giomocua;
        var $link_face;
        var $link_twitter;
        var $link_google;
        var $gioithieutrangchu;
        var $gioithieucvn;
        var $gioithieunhcfe;

    	function Setting($id,$link_menu_logo,$link_menu_bg,$tencongty,$email,$dienthoai,$link_maps,$giomocua,$link_face,$link_twitter,$link_google,$gioithieutrangchu,$gioithieucvn,$gioithieunhcfe)
    	{
    		# code...
    		$this->id = $id;
    		$this->link_menu_logo = $link_menu_logo;
    		$this->link_menu_bg = $link_menu_bg;
            $this->tencongty = $tencongty;
            $this->email = $email;
            $this->dienthoai = $dienthoai;
            $this->link_maps = $link_maps;
            $this->giomocua = $giomocua;
            $this->link_face = $link_face;
            $this->link_twitter = $link_twitter;
            $this->link_google = $link_google;
            $this->gioithieutrangchu = $gioithieutrangchu;
            $this->gioithieucvn = $gioithieucvn;
            $this->gioithieunhcfe = $gioithieunhcfe;
    	}
    };

    // Slider_Img...
    class Slider_Img
    {
        var $id;
        var $link_img;

        function Slider_Img($id,$link_img)
        {
            # code...
            $this->id = $id;
            $this->link_img = $link_img;
        }
    };

    // Gioi Thieu
    class GioiThieu
    {
        var $id;
        var $noiDung;

        function GioiThieu($id, $noiDung){
            $this->id = $id;
            $this->noiDung = $noiDung;
        }
    }

    // hometintuc, nh-cfe-tintuc...
    class TinTuc
    {
        var $id;
        var $tieude;
        var $tomtat;
        var $noidung;
        var $link_img;

        function TinTuc($id,$tieude,$tomtat,$noidung,$link_img)
        {
            # code...
            $this->id = $id;
            $this->tieude = $tieude;
            $this->tomtat = $tomtat;
            $this->noidung = $noidung;
            $this->link_img = $link_img;

        }
    };

    // menu monan...
    class MenuMonAn
    {
        var $id;
        var $tenmon;
        var $dongia;
        var $link_img;

        function MenuMonAn($id,$tenmon,$dongia,$link_img)
        {
            # code...
            $this->id = $id;
            $this->tenmon = $tenmon;
            $this->dongia = $dongia;
            $this->link_img = $link_img;
        }
    };

    // khach hang...
    class KhachHang
    {
        var $id;
        var $maKH;
        var $tenKH;
        var $dienThoai;
        var $diaChi;
        var $tichLuy;
        var $ngaySinh;
        var $CMND;

        function KhachHang($id,$maKH,$tenKH,$dienThoai,$diaChi,$tichLuy,$ngaySinh,$CMND)
        {
            # code...
            $this->id = $id;
            $this->maKH = $maKH;
            $this->tenKH = $tenKH;
            $this->dienThoai = $dienThoai;
            $this->diaChi = $diaChi;
            $this->tichLuy = $tichLuy;
            $this->ngaySinh = $ngaySinh;
            $this->CMND = $CMND;
        }
    };

// khach hang...
    class LichSuQuyDoiDiem
    {
        var $soDiemCu;
        var $soDiemMoi;
        var $noiDung;

        function LichSuQuyDoiDiem($soDiemCu,$soDiemMoi,$noiDung)
        {
            # code...
            $this->soDiemCu = $soDiemCu;
            $this->soDiemMoi = $soDiemMoi;
            $this->noiDung = $noiDung;
        }
    };
    
?>