import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  icon: any;
  text: string;
  onPress: () => void;
  colorIcon: string;
}
export const ActionButton = ({icon: Icon, text, onPress, colorIcon}: Props) => {
  return (
    <TouchableOpacity style={styles.tagButton} onPress={onPress}>
      <Icon color={colorIcon} size={14} />
      <Text style={styles.tagButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#f3f4f6',
    borderRadius: 255,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
    elevation: 1,
  },
  tagButtonText: {
    fontSize: 12,
    fontFamily: 'Lexend-Regular',
    marginLeft: 8,
    color: '#111827',
  },
});
