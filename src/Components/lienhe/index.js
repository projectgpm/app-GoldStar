import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, WebView } from 'react-native';
import {
    Container,
    Content,
    Text,
    Body,
    View,
    Thumbnail,
    List,
    ListItem,
} from 'native-base';

import { connect } from 'react-redux';
import style from '../style.js';
import _Header from '../header';

class Lienhe extends Component {
    render() {

        const html='<div><h2>'+this.props.arrSetting[0].tencongty+'</h2><h2>'+this.props.arrSetting[0].dienthoai+'</h2><h2>'+this.props.arrSetting[0].email+'</h2></div>';

        return (
            <Container style={style.bg_color}>
                <_Header nameTitle='Liên hệ' onOpen={() => { this.props.navigation.navigate("DrawerOpen") }} />
                <Content>
                    <View style={{ height: 300, width: "100%", backgroundColor: "#FFF" }}>
                        <WebView
                            source={{ uri: this.props.LinkID[0].link_maps }}
                        />
                    </View>
                    <View>
                        <View style={style.view_row_lienhe}>
                            <View style={style.view_colums_lienhe_left}>
                                <Text style={style.txt_view_lienhe}>Công ty: </Text>
                            </View>
                            <View style={style.view_colums_lienhe_right}>
                                <Text style={style.txt_view_lienhe}>{this.props.arrSetting[0].tencongty}</Text>
                            </View>
                        </View>
                        <View style={style.view_row_lienhe}>
                            <View style={style.view_colums_lienhe_left}>
                                <Text style={style.txt_view_lienhe}>Điện thoại: </Text>
                            </View>
                            <View style={style.view_colums_lienhe_right}>
                                <Text style={style.txt_view_lienhe}>{this.props.arrSetting[0].dienthoai}</Text>
                            </View>
                        </View>
                        <View style={style.view_row_lienhe}>
                            <View style={style.view_colums_lienhe_left}>
                                <Text style={style.txt_view_lienhe}>Email: </Text>
                            </View>
                            <View style={style.view_colums_lienhe_right}>
                                <Text style={style.txt_view_lienhe}>{this.props.arrSetting[0].email}</Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return {
        arrSetting: state.arrSetting,
        LinkID: state.linkID,
    };
}

export default connect(mapStateToProps)(Lienhe);