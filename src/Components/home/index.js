import React, { Component } from 'react';
import { Image, TouchableOpacity, WebView } from 'react-native';
import {
    Container,
    Content,
    Text,
    Left,
    Body,
    View,
    Card,
    CardItem,
    Thumbnail
} from 'native-base';

import { connect } from 'react-redux';
import style from '../style.js';
import _Header from '../header';
import _Slider_Home from '../slider_img/_Slider_Home.js';

class Home extends Component {
    render() {
        return (
            <Container style={style.bg_color}>
                <_Header nameTitle='Trang chủ' onOpen={() => { this.props.navigation.navigate("DrawerOpen") }} />
                <Content>
                    <_Slider_Home />
                </Content>
                <WebView style = {{flex: 1, marginTop: -65}}
                    source={{ uri: this.props.arrSetting[0].gioithieutrangchu }}
                />
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return {
        arrSetting: state.arrSetting
    };
}

export default connect(mapStateToProps)(Home);