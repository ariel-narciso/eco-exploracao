import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { blue } from 'ansi-colors';

export default class ScannerResponse extends React.Component {
  render() {
		const response = this.props.navigation.state.params;
		let bg = '';
		switch (response.dificuldade) {
			case 1: bg = 'blue'; break;
			case 2: bg = 'yellow'; break;
			default: bg = 'red';
		}
		return (
			<View style={{backgroundColor: bg, flex: 1}}>
				<Text>Pergunta: {response.pergunta}</Text>
				<Text>Resposta: {response.resposta}</Text>
				<Text>Dificuldade: {response.dificuldade}</Text>
				<Text style={{color: 'green'}} onPress={() => WebBrowser.openBrowserAsync(response.link)} >
					Link
				</Text>
			</View>
		)
	};
}