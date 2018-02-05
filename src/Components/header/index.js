import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import {
    View,
    Header,
    Left,
    Body,
    Right,
    Button,
    Title
} from 'native-base';

import style from '../style.js';
const iconMenu = require("../../img/menu.png");

class _Header extends Component {
    render() {
        return (
            <View>
                <Header style={style.header_bgcol}>
                    <Left>
                        <Button transparent onPress={this.props.onOpen}>
                            <Image square style={style.header_imglog} source={require("../../img/menu.png")} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={style.header_txttil}>{this.props.nameTitle}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        </Button>
                    </Right>
                </Header>
            </View>
        );
    }
}

export default _Header;