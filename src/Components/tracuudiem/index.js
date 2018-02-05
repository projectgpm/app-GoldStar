import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import {
    Container,
    Content,
    Text,
    Button,
    View,
} from 'native-base';

import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import style from '../style.js';
import _Header from '../header';

class Tracuudiem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            makhachhang: '',
            visible: false,
        }
    };

    fetchData(makhachhang) {
        fetch(this.props.LinkID[0].link_tracudiem, { method: "POST", body: JSON.stringify({ maKH: makhachhang }) })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_KhachHang_TCD',
                    data: responseData,
                });
                this.setState({
                    visible: !this.state.visible
                });
            })
            .catch((error) => {
                this.setState({
                    visible: !this.state.visible
                });
                alert("Mã khách hàng không tồn tại...");
            });
    };

    tradiem() {
        this.setState({
            visible: !this.state.visible,
        });
        this.fetchData(this.state.makhachhang);
    };

    render() {
        return (
            <Container style={style.bg_color}>
                <_Header nameTitle='Tra cứu điểm' onOpen={() => { this.props.navigation.navigate("DrawerOpen") }} />
                <Content>
                    <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                    <TextInput style={style.textInput}
                        onChangeText={(text) => this.setState({ makhachhang: text })}
                        value={this.state.makhachhang}
                        placeholder='Nhập mã khách hàng...' />
                    <Button style={style.btn_tradiem} block onPress={() => this.tradiem()}>
                        <Text style={style.txt_view_tcd}>Tra điểm</Text>
                    </Button>
                    <View style={style.view_row_tcd}>
                        <View style={style.view_colums_tcd_left}>
                            <Text style={style.txt_view_tcd}>Mã KH: </Text>
                        </View>
                        <View style={style.view_colums_tcd_right}>
                            <Text style={style.txt_view_tcd}>{this.props.arrKhachHang_TCD[0].maKH}</Text>
                        </View>
                    </View>
                    <View style={style.view_row_tcd}>
                        <View style={style.view_colums_tcd_left}>
                            <Text style={style.txt_view_tcd}>Tên KH: </Text>
                        </View>
                        <View style={style.view_colums_tcd_right}>
                            <Text style={style.txt_view_tcd}>{this.props.arrKhachHang_TCD[0].tenKH}</Text>
                        </View>
                    </View>
                    <View style={style.view_row_tcd}>
                        <View style={style.view_colums_tcd_left}>
                            <Text style={style.txt_view_tcd}>Điện thoại: </Text>
                        </View>
                        <View style={style.view_colums_tcd_right}>
                            <Text style={style.txt_view_tcd}>{this.props.arrKhachHang_TCD[0].dienThoai}</Text>
                        </View>
                    </View>
                    <View style={style.view_row_tcd}>
                        <View style={style.view_colums_tcd_left}>
                            <Text style={style.txt_view_tcd}>Địa chỉ: </Text>
                        </View>
                        <View style={style.view_colums_tcd_right}>
                            <Text style={style.txt_view_tcd}>{this.props.arrKhachHang_TCD[0].diaChi}</Text>
                        </View>
                    </View>
                    <View style={style.view_row_tcd}>
                        <View style={style.view_colums_tcd_left}>
                            <Text style={style.txt_view_tcd}>Tích luỹ: </Text>
                        </View>
                        <View style={style.view_colums_tcd_right}>
                            <Text style={style.txt_view_tcd}>{this.props.arrKhachHang_TCD[0].tichLuy}</Text>
                        </View>
                    </View>
                    <View style={style.view_row_tcd}>
                        <View style={style.view_colums_tcd_left}>
                            <Text style={style.txt_view_tcd}>Ngày sinh: </Text>
                        </View>
                        <View style={style.view_colums_tcd_right}>
                            <Text style={style.txt_view_tcd}>{this.props.arrKhachHang_TCD[0].ngaySinh}</Text>
                        </View>
                    </View>
                </Content>
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return {
        arrKhachHang_TCD: state.arrKhachHang_TCD,
        LinkID: state.linkID,
    };
}

export default connect(mapStateToProps)(Tracuudiem);