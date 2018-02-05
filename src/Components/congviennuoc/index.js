import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import {
    Container,
    Content,
    Text,
    View,
    List,
    ListItem,
    Thumbnail,
    Body,
    Button
} from 'native-base';

import { connect } from 'react-redux';
import style from '../style.js';
import _Header from '../header';
import _Slider_CVN from '../slider_img/_Slider_CVN.js';

class Congviennuoc extends Component {
    render() {
        return (
            <Container style={style.bg_color}>
                <_Header nameTitle='Công viên nước' onOpen={() => { this.props.navigation.navigate("DrawerOpen") }} />
                <Content>
                    <_Slider_CVN />
                    <View style={style.view_row}>
                        <TouchableOpacity style={style.view_colums_left}
                            onPress={() => {
                                this.props.navigation.navigate("NoiDung",
                                    {
                                        noiDung: this.props.LinkID[0].link_cvn_giave,
                                        tieuDe: "Giá vé"
                                    })
                            }}
                        >
                            <Image square style={{ height: "60%", width: "60%" }} source={require("../../img/MENU_BUTTON-01.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.view_colums_right}
                            onPress={() => {
                                this.props.navigation.navigate("NoiDung",
                                    {
                                        noiDung: this.props.LinkID[0].link_cvn_giomocua,
                                        tieuDe: "Giờ mở cửa"
                                    })
                            }}
                        >
                            <Image square style={{ height: "60%", width: "60%" }} source={require("../../img/MENU_BUTTON-02.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.view_row}>
                        <TouchableOpacity style={style.view_colums_left}
                            onPress={() => {
                                this.props.navigation.navigate("CVN_KhuyenMai", { tieuDe: "Khuyến Mãi" })
                            }}
                        >
                            <Image square style={{height: "60%", width: "60%"}} source={require("../../img/MENU_BUTTON-03.png")}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.view_colums_right}
                            onPress={() => { this.props.navigation.navigate("TinTuc_SuKien", { tieuDe: "Tin tức sự kiện" }) }}
                        >
                            <Image square style={{height: "60%", width: "60%"}} source={require("../../img/MENU_BUTTON-04.png")}/>
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

export default connect(mapStateToProps)(Congviennuoc);