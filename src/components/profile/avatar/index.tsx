import {StyleSheet, Text, View} from 'react-native';
import TurboImage from 'react-native-turbo-image';

export const Avatar = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 16}}>
        <TurboImage
          source={{uri: 'https://placedog.net/300/300?id=1'}}
          style={styles.avatar}
          cachePolicy="urlCache"
        />
        <Text style={styles.title}>Harvey Vasquez</Text>
        <Text style={styles.text}>yerik05vh@gmail.com</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 32,
    borderRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 255,
    marginHorizontal: 'auto',
  },
  text: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#6b7280',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    textAlign: 'center',
    color: '#111827',
    marginTop: 12,
  },
});
