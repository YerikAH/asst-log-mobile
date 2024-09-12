import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const FormJoin = () => {
  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.labelInput}>Ingresa el nombre de la empresa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. KomarcaLabs"
          placeholderTextColor="#d1d5db"
          cursorColor="#2563eb"
          inputMode="email"
          autoComplete="email"
          selectionColor="#bfdbfe"
        />
        <Text style={{...styles.textHelp, marginTop: 5}}>
          Tienes que escribir el nombre de la empresa o el ID de la empresa.
        </Text>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={styles.labelInput}>Ingresa el número de espacio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 01234567"
          placeholderTextColor="#d1d5db"
          cursorColor="#2563eb"
          inputMode="numeric"
          autoComplete="password"
          selectionColor="#bfdbfe"
        />
        <Text style={{...styles.textHelp, marginTop: 5}}>
          Ingresa el código del espacio a unirse.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar a asistencia</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.textHelp}>
          ¿Existe tu código y no logras ingresar?
        </Text>
        <TouchableOpacity>
          <Text style={styles.textLink}>Notifica al administrador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    borderRadius: 20,
    backgroundColor: '#FFF',
    padding: 16,
    width: '100%',
  },
  labelInput: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1f2937',
    fontFamily: 'Lexend-Medium',
  },
  input: {
    zIndex: 5,
    fontFamily: 'Lexend-Regular',
    borderWidth: 1,
    borderColor: '#f3f4f6',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 8,
    color: '#111827',
    elevation: 2,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: 255,
    marginTop: 32,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Lexend-Medium',
    marginLeft: 6,
  },
  textHelp: {
    fontSize: 12,
    fontWeight: '400',
    color: '#9ca3af',
    fontFamily: 'Lexend-Regular',
  },
  textLink: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2563eb',
    fontFamily: 'Lexend-Regular',
    textDecorationLine: 'underline',
  },
});
