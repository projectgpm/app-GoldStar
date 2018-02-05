import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
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
    Title,
    Thumbnail,
    List,
    ListItem,
} from 'native-base';

import { connect } from 'react-redux';
import style from '../style.js';

class CVN_TinTuc_SuKien extends Component {
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
                    <View>
                        <List style={{ flex: 1, marginLeft: -17 }}>
                            {
                                this.props.arrTinTuc_CVN.map((item, index) => (
                                    <ListItem key={item.id}>
                                        <Thumbnail square size={80} source={{ uri: item.link_img }} />
                                        <Body>
                                            <TouchableOpacity onPress={() => {
                                                this.props.navigation.navigate("NoiDung", { uriImage: item.link_img, noiDung: item.noidung, tieuDe: item.tieude })
                                            }}
                                            >
                                                <Text style={style.myfont}>{item.tieude}</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </View>
                </Content>
            </Container >
        );
    }
};

function mapStateToProps(state) {
    return {
        arrTinTuc_CVN: state.arrTinTuc_CVN,
    };
}

export default connect(mapStateToProps)(CVN_TinTuc_SuKien);