import {StyleSheet, Text} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export const QrCodeScanner = () => {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) return <Text> No permission </Text>;
  if (device == null) return <Text>Error devices</Text>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};
