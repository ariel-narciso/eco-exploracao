import * as React from 'react';
import { Alert, Text, View, StyleSheet, Modal } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScannerResponse from './ScannerResponse'

export default class BarcodeScanner extends React.Component {
	state = {
		hasCameraPermission: null,
		scanned: false,
		modalVisible: false,
		response: {}
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
				style={styles.container}>
				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={
						() => this.setState({modalVisible: false, scanned: false})
					}
				>
					<ScannerResponse params={this.state.response} />
				</Modal>
				<BarCodeScanner
					onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
					style={styles.barcodeScanner}
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
				this.setState({
					response: resposta,
					scanned: true,
					modalVisible: true,
				});
				//this.props.navigation.navigate('ScannerResponse', resposta); // tem que resolver
			}
		} catch (error) {
				this.setState({ scanned: true });
				this.errorMessage(() => this.setState({scanned: false}));
		}
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//flexDirection: 'column',
		//justifyContent: 'flex-end',
	},
	barcodeScanner: {
		flex: 1
	}
})