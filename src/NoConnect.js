import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class NoConnect extends Component {

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#FFF", justifyContent: "center", alignItems: "center"}}>
                <Image style={{flex: 1}} source={require("./img/bg123.png")}/>
            </View>
        );
    }
};

export default NoConnect;