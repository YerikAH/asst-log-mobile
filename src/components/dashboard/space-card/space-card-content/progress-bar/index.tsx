import {StyleSheet, View} from 'react-native';

export const ProgressBar: React.FC<{progress: number}> = ({progress}) => (
  <View style={styles.progressBarContainer}>
    <View style={[styles.progressBarFill, {width: `${progress}%`}]} />
  </View>
);

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: '#FFFFFF33',
    width: '100%',
    height: 6,
    borderRadius: 255,
  },
  progressBarFill: {
    backgroundColor: '#FFF',
    height: 6,
    borderRadius: 255,
  },
});
