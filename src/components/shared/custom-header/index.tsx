import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

interface Props {
  navigate: () => void;
  title: string;
}

export const CustomHeader = ({navigate, title}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.buttonHeader} onPress={navigate}>
        <ChevronLeftIcon size={20} color="#000" strokeWidth={2} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 20,
    color: '#111827',
    marginVertical: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#e2e8f0',
    height: 80,
    marginTop: 32,
  },
  buttonHeader: {
    marginRight: 15,
    height: '100%',
    justifyContent: 'center',
  },
});
