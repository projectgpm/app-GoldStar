import React, { Component } from 'react';
import { Image, StyleSheet, WebView } from 'react-native';
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
import HTMLView from 'react-native-htmlview';
import style from '../style.js';

export default class Tintuc extends Component {
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
                <WebView
                    style={{margin:2}}
                    source={{ uri: this.props.navigation.state.params.noiDung }}
                />
            </Container >
        );
    }
};

// const styles = StyleSheet.create({
//     a: {
//         fontWeight: '300',
//         color: '#FF3366',
//         margin: 5,
//     },
//     Img: {
//         width: '100px',
//         height: '100px',
//     }
// });