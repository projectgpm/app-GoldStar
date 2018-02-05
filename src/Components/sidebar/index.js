import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import { connect } from 'react-redux';
import styles from "./style";
import style from '../style.js';

const datas = [
	{
		name: "Trang chủ",
		route: "Home",
		icon: require("../../img/trangchu.png"),
		bg: "#C5F442",
	},
	{
		name: "Công viên nước",
		route: "CongVienNuoc",
		icon: require("../../img/cvn.png"),
		bg: "#477EEA",
	},
	{
		name: "Nhà hàng - Cafe",
		route: "NhaHang_Cafe",
		icon: require("../../img/nh1.png"),
		bg: "#C5F442",
	},
	{
		name: "Tra cứu điểm",
		route: "TraCuuDiem",
		icon: require("../../img/tcd1.png"),
		bg: "#DA4437",
	},
	{
		name: "Tuyển dụng",
		route: "TuyenDung",
		icon: require("../../img/td1.png"),
		bg: "#DA4437",
	},
	{
		name: "Liên hệ",
		route: "LienHe",
		icon: require("../../img/lh1.png"),
		bg: "#DA4437",
	},
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container style={style.bg_color}>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={require("../../img/bg12.png")} style={styles.drawerCover}>
					</Image>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Image square style={{ height: 20, width: 20 }} source={data.icon} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
					<View style={{ flex: 1, margin: 4, marginLeft: 60, flexDirection: 'row', }}>
						<TouchableOpacity onPress={() => {
							this.props.navigation.navigate("NoiDung", { uriImage: "", noiDung: this.props.arrSetting[0].link_face, tieuDe: "Facebook" })
						}}
						>
							<Image square style={{ height: 30, width: 30, margin: 12 }} source={require("../../img/face.png")} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {
							this.props.navigation.navigate("NoiDung", { uriImage: "", noiDung: this.props.arrSetting[0].link_twitter, tieuDe: "Youtube" })
						}}
						>
							<Image square style={{ height: 30, width: 30, margin: 12 }} source={require("../../img/logoyoutube.png")} />
						</TouchableOpacity>
						
					</View>
				</Content>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return { arrSetting: state.arrSetting };
}

export default connect(mapStateToProps)(SideBar);
