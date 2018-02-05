import { createStore } from 'redux';

const defaultState = {

  linkID: [
    {
      // Cong Vien Nuoc.
      "link_cvn_giave": "http://cvnsaovang.com/goldstarservices/cvn/giave.php",
      "link_cvn_giomocua": "http://cvnsaovang.com/goldstarservices/cvn/giomocua.php",
      "link_cvn_khuyenmai": "http://cvnsaovang.com/goldstarservices/cvn/khuyenmai.php",
      "link_cvn_slider": "http://cvnsaovang.com/goldstarservices/cvn/slider_img.php",
      "link_cvn_tintuc": "http://cvnsaovang.com/goldstarservices/cvn/tintuc.php",

      // Nha Hang - Cafe.
      "link_nh_cafediemtam": "http://cvnsaovang.com/goldstarservices/nh_cafe/cafediemtam.php",
      "link_nh_dichvutiec": "http://cvnsaovang.com/goldstarservices/nh_cafe/dichvutiec.php",
      "link_nh_menuthamkhao": "http://cvnsaovang.com/goldstarservices/nh_cafe/menuthamkhao.php",
      "link_nh_slider": "http://cvnsaovang.com/goldstarservices/nh_cafe/slider_img.php",
      "link_nh_tintuc": "http://cvnsaovang.com/goldstarservices/nh_cafe/tintuc.php",

      // Setting.
      "link_setting": "http://cvnsaovang.com/goldstarservices/setting/setting.php",

      // Trang Chu - Home.
      "link_home_gioithieu": "http://cvnsaovang.com/goldstarservices/trangchu/gioithieu.php",
      "link_home_slider": "http://cvnsaovang.com/goldstarservices/trangchu/slider_img.php",

      // Tra cuu diem.
      "link_tracudiem": "http://cvnsaovang.com/goldstarservices/tracuudiem/tradiem.php",
      "link_dangky": "http://cvnsaovang.com/goldstarservices/DangKy/NewApp.php",

      // Tuyen dung.
      "link_tuyendung": "http://cvnsaovang.com/goldstarservices/tuyendung/tuyendung.php",

      // -----
      "link_maps": "https://www.google.com/maps/@10.3795316,105.4481988,17.31z",
    }
  ],

  arrSetting: [
    {
      "id": 1,
      "link_menu_logo": "",
      "link_menu_bg": "",
      "tencongty": "",
      "email": "",
      "dienthoai": "",
      "link_maps": "",
      "giomocua": "",
      "link_face": "",
      "link_twitter": "",
      "link_google": "",
      "gioithieutrangchu": "",
      "gioithieucvn": "",
      "gioithieunhcfe": "",
    }
  ],

  // trang chu
  arrSlider_Home: [
    {
      "id": 4,
      "link_img": "",
    }
  ],

  // Nha hang
  arrSlider_NhaHang: [
    {
      "id": 4,
      "link_img": "",
    }
  ],

  arrMenuThamKhao_NhaHang: [
    {
      "id": 4,
      "tenmon": "",
      "dongia": 25000,
      "link_img": "",
    }
  ],
  
  arrTinTuc_NhaHang: [
    {
      "id": 3,
      "tieude": "",
      "tomtat": "",
      "noidung": "",
      "link_img": ""
    },
  ],


  // CVN..
  arrSlider_CVN: [
    {
      "id": 4,
      "link_img": "",
    }
  ],
  arrKhuyenMai_CVN: [
    {
      "id": 3,
      "tieude": "",
      "tomtat": "",
      "noidung": "",
      "link_img": ""
    },
  ],
  arrTinTuc_CVN: [
    {
      "id": 3,
      "tieude": "",
      "tomtat": "",
      "noidung": "",
      "link_img": ""
    },
  ],

  // Tra cuu diem.
  arrKhachHang_TCD: [
    {
      "id": "",
      "maKH": "",
      "tenKH": "",
      "dienThoai": "",
      "diaChi": "",
      "tichLuy": "",
      "ngaySinh": "",
    },
  ],

  // Tuyen Dung
  arrTinTuc_TuyenDung: [
    {
      "id": 3,
      "tieude": "",
      "tomtat": "",
      "noidung": "",
      "link_img": ""
    },
  ],

};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case '_LinkID': return {
      ...state,
      linkID: action.data,
    };

    case '_Setting': return {
      ...state,
      arrSetting: action.data,
    };
    // Home
    case '_Slider_Home': return {
      ...state,
      arrSlider_Home: action.data,
    };

    // Nha Hang
    case '_Slider_NH': return {
      ...state,
      arrSlider_NhaHang: action.data,
    };
    case '_MenuThamKhao_NH': return {
      ...state,
      arrMenuThamKhao_NhaHang: action.data,
    };
    case '_TinTuc_NH': return {
      ...state,
      arrTinTuc_NhaHang: action.data,
    };

    // CVN.
    case '_Slider_CVN': return {
      ...state,
      arrSlider_CVN: action.data,
    };
    case '_KhuyenMai_CVN': return {
      ...state,
      arrKhuyenMai_CVN: action.data,
    };
    case '_TinTuc_CVN': return {
      ...state,
      arrTinTuc_CVN: action.data,
    };

    // TCD
    case '_KhachHang_TCD': return {
      ...state,
      arrKhachHang_TCD: action.data,
    };

    // Tuyen Dung
    case '_TinTuc_TuyenDung': return {
      ...state,
      arrTinTuc_TuyenDung: action.data,
    };

    default: break;
  }
  return state;
};

const store = createStore(reducer);
export default store;