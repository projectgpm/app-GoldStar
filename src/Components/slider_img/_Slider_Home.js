import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    View
} from 'native-base';

import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import style from '../style.js';

class _Slider_Home extends Component {
    render() {
        return (
            <View style={style.view_img_sider}>
                <Swiper showsButtons={true} autoplay={true} autoplayTimeout={3}>
                    {
                        this.props.arrSlider_Home.map((item, index) => (
                            <Image key={item.id} style={style.img_sider} source={{ uri: item.link_img }} />
                        ))
                    }
                </Swiper>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        arrSlider_Home: state.arrSlider_Home,
    };
}

export default connect(mapStateToProps)(_Slider_Home);