/* @flow */

import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from './Components/home/';
import NhaHang_Cafe from './Components/nhahang_cafe';
import Cafe_diemtam from './Components/nhahang_cafe/cafe_diemtam.js';
import NH_TinTuc_SuKien from './Components/nhahang_cafe/nh_tintuc_sukien.js';
import Congviennuoc from './Components/congviennuoc/';
import CVN_KhuyenMai from './Components/congviennuoc/cvn_khuyenmai.js';
import CVN_TinTuc_SuKien from './Components/congviennuoc/cvn_tintuc_sukien.js';
import Tracuudiem from './Components/tracuudiem/';
import Tuyendung from './Components/tuyendung/';
import SideBar from './Components/sidebar';
import Tintuc from './Components/tintuc';
import Lienhe from './Components/lienhe';

export const HomeStack = StackNavigator({
    Home:{
        screen: Home,
    },
    NoiDung:{
        screen: Tintuc,
    },
},{headerMode: "none"});

export const NhaHang_CafeStack = StackNavigator({
    NhaHang_Cafe:{
        screen: NhaHang_Cafe,
    },
    Cafe_DiemTam:{
        screen: Cafe_diemtam,
    },
    TinTuc_SuKien:{
        screen: NH_TinTuc_SuKien,
    },
    NoiDung:{
        screen: Tintuc,
    },
},{headerMode: "none"});

export const CongVienStack = StackNavigator({
    CongVien:{
        screen: Congviennuoc,
    },
    CVN_KhuyenMai:{
        screen: CVN_KhuyenMai,
    },
    TinTuc_SuKien:{
        screen: CVN_TinTuc_SuKien,
    },
    NoiDung:{
        screen: Tintuc,
    },
},{headerMode: "none"});

export const TraCuuStack = StackNavigator({
    TraCuu:{
        screen: Tracuudiem,
    },
},{headerMode: "none"});

export const TuyenDungStack = StackNavigator({
    Tuyendung:{
        screen: Tuyendung,
    },
    NoiDung:{
        screen: Tintuc,
    },
},{headerMode: "none"});

export const LienHeStack = StackNavigator({
    LienHe:{
        screen: Lienhe,
    },
},{headerMode: "none"});

export const TinTuc = StackNavigator({
    TinTuc:{
        screen: Tintuc,
    },
},{headerMode: "none"});

// Side menu
export const SideMenu = DrawerNavigator({
    Home:{screen: HomeStack},
    NhaHang_Cafe: {screen: NhaHang_CafeStack},
    CongVienNuoc:{screen: CongVienStack},
    TraCuuDiem:{screen: TraCuuStack},
    TuyenDung:{screen: TuyenDungStack},
    LienHe: { screen: LienHeStack},
    TinTuc: { screen: TinTuc },
},{
    drawerWith: 250,
    drawerPosition: 'left',
    contentComponent: props => <SideBar{...props}/>
});
export default SideMenu;