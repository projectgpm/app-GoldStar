const React = require("react-native");
const { StyleSheet, Platform, Dimensions } = React;

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const myfont = "San Francisco";

export default {
    // Màu nền...
    bg_color: {
        backgroundColor: '#FFF',
    },

    // Header....
    header_bgcol: {
        backgroundColor: '#00BAFF',
    },
    header_imglog: {
        width: 30,
        height: 30,
    },
    header_txttil: {
        color: '#FFF',
        fontFamily: myfont,
    },

    // Slider Images....
    view_img_sider: {
        flex: 1,
        height: height / 3,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    img_sider: {
        width: '100%',
        height: height / 3,
    },

    // Text nội dung mới...
    view_tieude_news: {
        opacity: 0.8,
        height: 35,
        backgroundColor: '#FFF',
        marginTop: 5,
        justifyContent: 'center',
    },
    txt_view_tieude: {
        paddingLeft: 6,
        fontSize: 18,
        fontFamily: myfont,
    },

    // 4 Menu CVN, NhaHang_Cafe
    view_row: {
        flex: 1,
        flexDirection: 'row',
    },
    view_colums_left: {
        flex: 1,
        //backgroundColor: "#FFF",
        marginTop: 15,
        marginLeft: 15,
        marginRight: 7,
        width: width/3,
        height: height/4,
        opacity: 0.9,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_colums_right: {
        flex: 1,
        //backgroundColor: "#FFF",
        marginTop: 15,
        marginRight: 15,
        marginLeft: 7,
        width: width/3,
        height: height/4,
        opacity: 0.9,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt_view_menu: {
        fontFamily: myfont,
    },

    // Tra cứu điểm...
    view_row_tcd: {
        flex: 1,
        flexDirection: 'row',
    },
    view_colums_tcd_left: {
        flex: 0.3,
        backgroundColor: "#FFF",
        marginLeft: 5,
        height: 35,
        opacity: 0.8,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    view_colums_tcd_right: {
        flex: 0.7,
        backgroundColor: "#FFF",
        marginRight: 5,
        height: 35,
        opacity: 0.8,
        justifyContent: 'center',
    },
    txt_view_tcd: {
        fontFamily: myfont,
    },
    textInput: {
        height: 45,
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: "#FFF",
        margin: 5,
        paddingLeft: 10,
        fontSize: 16,
        fontFamily: myfont,
    },
    btn_tradiem: {
        margin: 5,
        //fontFamily: myfont,
    },

    // Lien he...
    view_row_lienhe: {
        flex: 1,
        flexDirection: 'row',
    },
    view_colums_lienhe_left: {
        flex: 0.3,
        backgroundColor: "#FFF",
        marginTop: 5,
        marginLeft: 5,
        width: "20%",
        height: 40,
        opacity: 0.8,
        justifyContent: "center",
        paddingLeft: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    view_colums_lienhe_right: {
        flex: 0.7,
        backgroundColor: "#FFF",
        marginTop: 5,
        marginRight: 5,
        width: "70%",
        height: 40,
        opacity: 0.8,
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    txt_view_lienhe: {
        fontFamily: myfont,
    },

    // Menu tham khảo...
    view_row_menu_thamkhao: {
        flex: 1,
        backgroundColor: "#FFF",
        flexDirection: 'row',
        width: "100%",
        borderBottomWidth: 0.5,
        borderColor: "black",
    },
    txt_view_menu_thamkhao: {
        fontFamily: myfont,
    },
    img_menu_thamkhao: {
        height: 35,
        width: 35,
    },

    //Tin tức mới trang chủ, hình ảnh trong nội dung...
    home_tintuc_img: {
        height: 200,
        width: "100%",
        flex: 1,
    },
};
