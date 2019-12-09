import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

export default class Index extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight
					style={styles.button}
					underlayColor='#00198c'
					onPress={() => this.props.navigation.navigate('BarcodeScanner')}
				>
					<Text style={styles.text}>Ler QR Code</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#d6d6d6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#052fe6',
		borderRadius: 30,
		borderColor: 'transparent'
	},
	text: {
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 40,
		fontWeight: 'bold',
		color: 'white'
	}
});
