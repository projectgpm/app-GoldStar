import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import {
    Container,
    Content,
    Text,
    View,
    List,
    ListItem,
    Thumbnail,
    Body
} from 'native-base';

import { connect } from 'react-redux';
import style from '../style.js';
import _Header from '../header';
import _Slider_NhaHang from '../slider_img/_Slider_NhaHang.js';

class NhaHang_Cafe extends Component {
    render() {
        return (
            <Container style={style.bg_color}>
                <_Header nameTitle='Nhà hàng - cafe' onOpen={() => { this.props.navigation.navigate("DrawerOpen") }} />
                <Content>
                    <_Slider_NhaHang />
                    <View style={style.view_row}>
                        <TouchableOpacity style={style.view_colums_left}
                            onPress={() => {
                                this.props.navigation.navigate("NoiDung",
                                    {
                                        noiDung: this.props.LinkID[0].link_nh_dichvutiec,
                                        tieuDe: "Dịch vụ tiệc"
                                    })
                            }}
                        >
                            <Image square style={{ height: "60%", width: "60%" }} source={require("../../img/MENU_BUTTON-05.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.view_colums_right}
                            onPress={() => {
                                this.props.navigation.navigate("NoiDung",
                                    {
                                        noiDung: this.props.LinkID[0].link_nh_menuthamkhao,
                                        tieuDe: "Menu tham khảo"
                                    })
                            }}
                        >
                            <Image square style={{ height: "60%", width: "60%" }} source={require("../../img/MENU_BUTTON-06.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.view_row}>
                        <TouchableOpacity style={style.view_colums_left}
                            onPress={() => {
                                this.props.navigation.navigate("Cafe_DiemTam", { tieuDe: "Cafe - điểm tâm" })
                            }}
                        >
                            <Image square style={{ height: "60%", width: "60%" }} source={require("../../img/MENU_BUTTON-07.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.view_colums_right}
                            onPress={() => { this.props.navigation.navigate("TinTuc_SuKien", { tieuDe: "Tin tức sự kiện" }) }}
                        >
                            <Image square style={{ height: "60%", width: "60%" }} source={require("../../img/MENU_BUTTON-08.png")} />
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container >
        );
    }
};

function mapStateToProps(state) {
    return {
        LinkID: state.linkID,
    };
}

export default connect(mapStateToProps)(NhaHang_Cafe);