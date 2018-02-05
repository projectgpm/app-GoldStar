import React, { Component } from 'react';
import { TextInput, Alert, AsyncStorage } from 'react-native';
import {
    Container,
    Content,
    Text,
    Button,
    View,
} from 'native-base';
import { connect } from 'react-redux';
import style from './Components/style.js';

class NewApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSDT: '',
            txtMaGT: '',
        }
    }

    save = async () => {
        try {
            await AsyncStorage.setItem('@newApp:key', 'true');
            //alert("true");
        } catch (e) {
            alert(e);
        }
    }

    fetchData(txtSDT, txtMaGT) {
        fetch(this.props.LinkID[0].link_dangky, {method: "POST", body: JSON.stringify({sdtKH: txtSDT, maKHGT: txtMaGT})})
        .then((response) => response.text())
        .then((responseData) => {
            alert("Cập nhật thành công...");
        }).done();
    };

    onSaveSDT = (text) => {
        this.state.txtSDT = text;
        this.setState(this.state);
    }

    onSaveMaGT = (text) => {
        this.state.txtMaGT = text;
        this.setState(this.state);
    }

    onSend = () => {
        this.fetchData(this.state.txtSDT, this.state.txtMaGT);
        this.save();
        this.props.onClick();
    }

    onClose = () => {
        this.save();
        this.props.onClick();
    }

    render() {
        return (
            <Container style={style.bg_color}>
                <Content>
                    <View style={{ marginTop: 100 }}>
                        <Text style={style.txt_view_lienhe} style={{ padding: 10, margin: 2 }}>
                            {} Chào mừng bạn đến với ứng dụng Công Viên Nước Sao Vàng.
                            Hãy nhập số điện thoại đăng ký thẻ khách hàng của bạn và mã người giới thiệu
                            để cả hai đều được tích điểm. Chia sẻ càng nhiều, tích luỹ càng lớn.
                        </Text>
                        <TextInput style={style.textInput}
                            onChangeText={(text) => this.onSaveSDT(text)}
                            name="textSDT"
                            value={this.state.txtSDT}
                            placeholder='Điện thoại...' />
                        <TextInput style={style.textInput}
                            onChangeText={(text) => this.onSaveMaGT(text)}
                            name="textMaGT"
                            value={this.state.txtMaGT}
                            placeholder='Nhập số điện thoại giới thiệu...' />
                        <Button onPress={() => this.onSend()} style={style.btn_tradiem} block>
                            <Text style={style.txt_view_tcd}>Đăng ký</Text>
                        </Button>
                        <Button onPress={() => this.onClose()} style={style.btn_tradiem} block>
                            <Text style={style.txt_view_tcd}>Không đăng ký</Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        );
    }
};

function mapStateToProps(state) {
    return {
        LinkID: state.linkID
    };
}

export default connect(mapStateToProps)(NewApp);