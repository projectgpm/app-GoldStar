import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Container,
    Content,
    Text,
    View,
    Header,
    Left,
    Body,
    Right,
    Button,
    Title
} from 'native-base';

import { connect } from 'react-redux';
import style from '../style.js';

class Cafe_diemtam extends Component {
    render() {
        return (
            <Container style={style.bg_color}>
                <Header style={style.header_bgcol}>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Image square style={style.header_imglog} source={require("../icon/iconBack.png")} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={style.header_txttil}>{this.props.navigation.state.params.tieuDe}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    {
                        this.props.arrMenuThamKhao_NhaHang.map((item, index) => (
                            <View key={item.id} style={style.view_row_menu_thamkhao}>
                                <View style={{ flex: 0.2,justifyContent: 'center', alignItems: "center", height: 40 }}><Image style={style.img_menu_thamkhao} source={{ uri: item.link_img }} /></View>
                                <View style={{ flex: 0.6,justifyContent: 'center', paddingLeft: 5, height: 40 }}><Text style={style.txt_view_menu_thamkhao}>{item.tenmon}</Text></View>
                                <View style={{ flex: 0.2,justifyContent: 'center', paddingLeft: 5, height: 40 }}><Text style={style.txt_view_menu_thamkhao}>{item.dongia}</Text></View>
                            </View>
                        ))
                    }
                </Content>
            </Container >
        );
    }
};

function mapStateToProps(state) {
    return {
        arrMenuThamKhao_NhaHang: state.arrMenuThamKhao_NhaHang,
    };
}

export default connect(mapStateToProps)(Cafe_diemtam);