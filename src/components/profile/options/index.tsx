import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import {
  FolderPlusIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from 'react-native-heroicons/solid';

const options = [
  {
    name: 'Preguntas frecuentes',
    icon: QuestionMarkCircleIcon,
    color: '#0ea5e9',
  },
  {
    name: 'Crear mi espacio',
    icon: FolderPlusIcon,
    color: '#4f46e5',
  },
  {
    name: 'Cerrar Sesión',
    icon: XCircleIcon,
    color: '#ec4899',
  },
];

export const Options = () => {
  return (
    <View style={styles.container}>
      {options.map((item, idx) => (
        <TouchableOpacity style={styles.button} key={idx}>
          <View style={styles.containerButton}>
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: `${item.color}`},
              ]}>
              <item.icon size={16} color="#FFF" />
            </View>
            <Text style={styles.buttonText}>{item.name}</Text>
          </View>
          <ChevronRightIcon size={18} color="#1f2937" strokeWidth={2} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 20,
    marginBottom: 48,
  },
  containerButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 8,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  buttonText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    marginLeft: 10,
    color: '#1f2937',
  },
});
