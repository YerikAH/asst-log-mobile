import {useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import Svg, {Defs, G, Mask, Rect} from 'react-native-svg';
import {CameraIcon, QrCodeIcon} from 'react-native-heroicons/solid';

const {width, height} = Dimensions.get('window');
const frameWidth = 280;
const frameHeight = 280;
const frameX = (width - frameWidth) / 2;
const frameY = (height - frameHeight) / 2 - 100;

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
          <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
            <Defs>
              <Mask id="mask">
                <Rect x="0" y="0" width={width} height={height} fill="white" />
                <Rect
                  x={frameX}
                  y={frameY}
                  width={frameWidth}
                  height={frameHeight}
                  rx={20}
                  ry={20}
                  fill="black"
                />
              </Mask>
            </Defs>

            <G mask="url(#mask)">
              <Rect
                x="0"
                y="0"
                width={width}
                height={height}
                fill="rgba(0, 0, 0, 0.8)"
              />
            </G>
            <Rect
              x={frameX}
              y={frameY}
              width={frameWidth}
              height={frameHeight}
              fill="none"
              rx={20}
              ry={20}
              stroke="white"
              strokeDasharray="100,30"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </Svg>
          <TouchableOpacity style={styles.button}>
            <CameraIcon color="#FFF" size={16} />
            <Text style={styles.buttonText}>Escanenando código QR</Text>
          </TouchableOpacity>
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

  focusFrame: {
    position: 'absolute',
    top: frameY,
    left: frameX,
    width: frameWidth,
    height: frameHeight,
    borderWidth: 3,
    borderColor: 'white',
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    bottom: frameY - 20,
    width: frameWidth,
    backgroundColor: '#FFF4',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lexend-Medium',
    fontSize: 14,
  },
});
