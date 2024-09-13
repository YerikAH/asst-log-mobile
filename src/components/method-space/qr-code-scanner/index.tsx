import {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export const QrCodeScanner = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (!hasPermission) return <Text> No permission </Text>;
  if (device == null) return <Text>Error devices</Text>;

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Camera
            codeScanner={codeScanner}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
          <View style={styles.borderCode}></View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderCode: {
    width: 270,
    height: 270,
    borderWidth: 4,
    borderColor: '#FFF',
    position: 'absolute',
    borderRadius: 30,
  },
});
