import {useAppNavigation} from '@/hooks';
import {RoutesSpace} from '@/navigation/routes';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PlusIcon} from 'react-native-heroicons/outline';

export const FloatingButton = () => {
  const {navigateTo} = useAppNavigation();
  const navigateToSpace = () => navigateTo(RoutesSpace.SuccessSpace);
  return (
    <View
      style={{
        paddingHorizontal: 32,
        position: 'absolute',
        width: '100%',
        bottom: 0,
      }}>
      <TouchableOpacity style={styles.button} onPress={navigateToSpace}>
        <PlusIcon size={16} color="#FFF" strokeWidth={2} />
        <Text style={styles.buttonText}>Registrar asistencia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 255,
    paddingHorizontal: 32,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Lexend-Medium',
    marginLeft: 6,
  },
});
