import * as React from 'react';
import { Alert, Text, View, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScanner extends React.Component {
	state = {
		hasCameraPermission: null,
		scanned: false,
	};

	async componentDidMount() {
		this.getPermissionsAsync();
	}

	getPermissionsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	};

	errorMessage = (handle) => {
		Alert.alert(
			'QR Code inválido!',
			'A informação do QR Code não se adequa ao padrão definido',
			[{text: 'Ok', onPress: handle}],
			{cancelable: false});
	}

	render() {
		const { hasCameraPermission, scanned } = this.state;

		if (hasCameraPermission === null) {
			return <Text>Requesting for camera permission</Text>;
		}
		if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		}
		
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'flex-end',
				}}>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
					style={StyleSheet.absoluteFillObject}
				/>
			</View>
		);
	}

	handleBarCodeScanned = ({ type, data }) => {

		try {
			const resposta = JSON.parse(data);
			if (!resposta.hasOwnProperty('pergunta') ||
					!resposta.hasOwnProperty('resposta') ||
					!resposta.hasOwnProperty('alternativa') ||
					!resposta.hasOwnProperty('dificuldade') ||
					!resposta.hasOwnProperty('link')) {
				this.setState({ scanned: true });
				this.errorMessage(() => this.setState({scanned: false}));
			} else {
				//this.setState({ scanned: true });
				this.props.navigation.navigate('ScannerResponse', resposta); // tem que resolver
				//this.setState({scanned: false});
			}
		} catch (error) {
				this.setState({ scanned: true });
				this.errorMessage(() => this.setState({scanned: false}));
		}
	};
}