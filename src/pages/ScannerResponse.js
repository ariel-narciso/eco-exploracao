import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class ScannerResponse extends React.Component {
  render() {
		const {pergunta, alternativa, resposta, dificuldade, link} = this.props.params;
		return (
			<ScrollView style={styles(dificuldade).container}>
				<Text style={styles(dificuldade).pergunta}>{pergunta}</Text>
				<Text style={styles(dificuldade).alternativa}>{alternativa}</Text>
				<Text style={styles(dificuldade).resposta}>{resposta}</Text>
				<Text style={styles(dificuldade).link} onPress={() => WebBrowser.openBrowserAsync(link)} >
					Veja mais aqui
				</Text>
			</ScrollView>
		)
	};
}

styles = (dificuldade) => {

	let color, backgroundColor;

	if (dificuldade != 2) {
		color = 'white';
		if (dificuldade == 1) {
			backgroundColor = 'blue';
		} else {
			backgroundColor = 'red';
		}
	} else {
		color = 'black';
		backgroundColor = 'yellow';
	}

	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: backgroundColor
		},
		pergunta: {
			fontSize: 25,
			fontWeight: 'bold',
			marginTop: 10,
			paddingBottom: 10,
			borderBottomWidth: 2,
			borderBottomColor: color,
			color: color,
			marginLeft: 10,
			marginRight: 10,
			textAlign: "center"
		},
		alternativa: {
			textAlign: "center",
			fontSize: 25,
			fontWeight: 'bold',
			marginLeft: 10,
			paddingBottom: 10,
			borderBottomWidth: 2,
			borderBottomColor: color,
			color: color,
			marginRight: 10,
			marginTop: 10,
		},
		resposta: {
			textAlign: "justify",
			fontSize: 20,
			color: color,
			marginLeft: 10,
			paddingBottom: 10,
			borderBottomWidth: 2,
			borderBottomColor: color,
			marginRight: 10,
			marginTop: 10,
		},
		link: {
			textAlign: "center",
			fontSize: 20,
			marginTop: 10,
			marginBottom: 10,
			color: color,
			textDecorationLine: "underline"
		}
	}) 
}