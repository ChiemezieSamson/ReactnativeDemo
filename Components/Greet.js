import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Greet = ({ name }) => {
	return (
		<View>
			<View style={[style.hello, style.box, style.boxShadow]}>
				<Text style={style.container}>Hello {name}</Text>
			</View>
			<View
				style={[
					style.HowAreYou,
					style.box,
					style.androidShadow,
					style.boxShadow,
				]}
			>
				<Text style={style.container}>How are you {name}</Text>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		fontSize: 18,
		color: "pink",
	},
	box: {
		width: 250,
		height: 250,
		// padding: 10,
		paddingHorizontal: 10,
		marginVertical: 10,
		borderWidth: 2,
		borderColor: "purple",
		borderStyle: "solid",
	},
	boxShadow: {
		shadowColor: "blue",
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowOpacity: 0.6,
		shadowRadius: 4,
	},
	androidShadow: {
		elevation: 10,
	},
	hello: {
		backgroundColor: "lightblue",
		borderRadius: 40,
	},
	HowAreYou: {
		backgroundColor: "lightgreen",
	},
});

export default Greet;
