import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import SideMenu from './DrawerMenu.js';
import NoConnect from './NoConnect.js';

class AppLoading extends Component {

    constructor(props) {
        super();
        this.state = {
            visible: true,
        };
    };

    Setting() {
        fetch(this.props.LinkID[0].link_setting, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_Setting',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    Slider_Home() {
        fetch(this.props.LinkID[0].link_home_slider, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_Slider_Home',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    Slider_NH() {
        fetch(this.props.LinkID[0].link_nh_slider, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_Slider_NH',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    Slider_CVN() {
        fetch(this.props.LinkID[0].link_cvn_slider, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_Slider_CVN',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    KhuyenMai_CVN() {
        fetch(this.props.LinkID[0].link_cvn_khuyenmai, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_KhuyenMai_CVN',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    TinTuc_CVN() {
        fetch(this.props.LinkID[0].link_cvn_tintuc, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_TinTuc_CVN',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    MenuThamKhao_NH() {
        fetch(this.props.LinkID[0].link_nh_menuthamkhao, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_MenuThamKhao_NH',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    TinTuc_NH() {
        fetch(this.props.LinkID[0].link_nh_tintuc, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_TinTuc_NH',
                    data: responseData,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Tuyen Dung..
    TinTuc_TuyenDung() {
        fetch(this.props.LinkID[0].link_tuyendung, { method: "POST", body: null })
            .then((response) => response.json())
            .then((responseData) => {
                this.props.dispatch({
                    type: '_TinTuc_TuyenDung',
                    data: responseData,
                });
                this.setState({ visible: false, });
            })
            .catch((error) => {
                alert("Không có kết nối hoặc không ổn định...Vui lòng khởi động lại ứng dụng.");
            });
    };


    componentDidMount() {
        this.Setting();

        this.Slider_Home();
        this.Slider_NH();
        this.Slider_CVN();

        this.KhuyenMai_CVN();
        this.TinTuc_CVN();

        this.MenuThamKhao_NH();
        this.TinTuc_NH();

        this.TinTuc_TuyenDung();
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                {this.state.visible ? <NoConnect /> : <SideMenu />}
            </View>
        );
    }
};

function mapStateToProps(state) {
    return {
        LinkID: state.linkID
    };
}

export default connect(mapStateToProps)(AppLoading);