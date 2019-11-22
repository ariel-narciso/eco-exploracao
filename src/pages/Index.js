import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class Index extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Button title="Ler QRCODE" onPress={() => this.props.navigation.navigate('BarcodeScanner')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: 'skyblue',
		alignItems: 'center',
		justifyContent: 'center',
  },
});
