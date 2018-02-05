import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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

class Tuyendung extends Component {
    render() {
        return (
            <Container style={style.bg_color}>
                <_Header nameTitle='Tuyển dụng' onOpen={() => { this.props.navigation.navigate("DrawerOpen") }} />
                <Content>
                    <View>
                        <List style={{ flex: 1, marginLeft: -14 }}>
                            {
                                this.props.arrTinTuc_TuyenDung.map((item, index) => (
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
}

function mapStateToProps(state) {
    return {
        arrTinTuc_TuyenDung: state.arrTinTuc_TuyenDung,
    };
}

export default connect(mapStateToProps)(Tuyendung);