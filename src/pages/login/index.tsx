import {
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import logo from '@/assets/logo-icon.png';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {useEffect, useState} from 'react';
import {useAppNavigation, useFetch} from '@/hooks';
import {Routes} from '@/navigation/routes';
import google from '@/assets/icon/google.png';
import {Controller, useForm} from 'react-hook-form';
import {login} from '@/services/auth/login';

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const {error, loader, data, fetchData} = useFetch(login);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (dataForm: LoginForm) => await fetchData(dataForm);

  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(Routes.Register);
  const navigateToDashboard = () => navigateTo(Routes.Tabs);

  useEffect(() => {
    if (error.error && !loader && data === null) return;
    if (!error.error && !loader && data !== null) navigateToDashboard();
  }, [error, loader, data]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 20,
            marginTop: 42,
            marginBottom: 24,
            backgroundColor: '#fff',
            borderRadius: 24,
          }}>
          <View>
            <Image source={logo} style={styles.containerLogo} />
            <Text style={styles.title}>Iniciar sesión con tu cuenta</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel
            </Text>
            <View style={styles.tab}>
              <TouchableOpacity
                style={[styles.buttonTab, styles.buttonTabActive]}>
                <Text
                  style={[styles.buttonTabText, styles.buttonTabActiveText]}>
                  Iniciar sesión
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonTab}
                onPress={navigateToRegister}>
                <Text style={styles.buttonTabText}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.labelInput}>
                Ingresa tu correo electronico:
              </Text>
              <Controller
                rules={{
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Introduce un correo electrónico válido',
                  },
                }}
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Ej. jorge@email.com"
                    placeholderTextColor="#d1d5db"
                    cursorColor="#2563eb"
                    inputMode="email"
                    autoComplete="email"
                    selectionColor="#bfdbfe"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text style={styles.error}>{errors.email.message}</Text>
              )}
            </View>

            <View style={{marginTop: 24}}>
              <Text style={styles.labelInput}>Ingresa tu contraseña:</Text>
              <View style={{position: 'relative'}}>
                <TouchableOpacity
                  style={styles.showPassword}
                  onPress={toggleShowPassword}>
                  {showPassword ? (
                    <EyeIcon size={14} color="#6b7280" />
                  ) : (
                    <EyeSlashIcon size={14} color="#6b7280" />
                  )}
                </TouchableOpacity>
                <Controller
                  rules={{
                    required: 'La contraseña es obligatoria',
                    minLength: {
                      value: 8,
                      message: 'La contraseña debe tener al menos 8 caracteres',
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                      message:
                        'La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial',
                    },
                  }}
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={[styles.input, {paddingRight: 46}]}
                      placeholder="Ej. AgawqBW!3Gw"
                      placeholderTextColor="#d1d5db"
                      cursorColor="#2563eb"
                      inputMode="text"
                      autoComplete="password"
                      selectionColor="#bfdbfe"
                      secureTextEntry={!showPassword}
                    />
                  )}
                  name="password"
                />
              </View>
              {errors.password && (
                <Text style={styles.error}>{errors.password.message}</Text>
              )}
            </View>
          </View>
          <View>
            <View style={{flex: 1, alignItems: 'flex-end', marginTop: 16}}>
              <TouchableOpacity style={styles.buttonLink}>
                <Text style={styles.buttonLinkText}>
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
              disabled={loader}>
              {loader && <ActivityIndicator size="small" color="#FFF" />}
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            {!loader && error.error && (
              <Text
                style={{...styles.error, textAlign: 'center', marginTop: 5}}>
                {error.message}
              </Text>
            )}
            <View style={styles.separatorContainer}>
              <View style={styles.separatorLeft} />
              <Text style={styles.separatorText}>O continuar con</Text>
              <View style={styles.separatorRight} />
            </View>
            <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
              <Image
                source={google}
                style={{width: 16, objectFit: 'contain'}}
              />
              <Text style={[styles.buttonText, styles.buttonGoogleText]}>
                Ingresar con Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonGoogleText: {
    color: '#111827',
    marginLeft: 10,
  },
  buttonGoogle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginTop: 0,
  },
  separatorRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
    marginLeft: 10,
  },
  separatorLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
    marginRight: 10,
  },
  separatorText: {
    flex: 1,
    fontFamily: 'Lexend-Regular',
    textAlign: 'center',
    color: '#9ca3af',
  },
  separatorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  buttonLink: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 255,
    backgroundColor: '#dbeafe',
  },
  buttonLinkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2563eb',
    fontFamily: 'Lexend-Medium',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 32,
    flex: 1,
  },
  showPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    right: 16,
    top: 6,
    bottom: 0,
    marginVertical: 'auto',
    zIndex: 10,
  },
  containerLogo: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginHorizontal: 'auto',
  },

  title: {
    fontSize: 22,
    color: '#111827',
    fontFamily: 'Lexend-Bold',
    marginTop: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6b7280',
    marginTop: 8,
    fontFamily: 'Lexend-Regular',
    textAlign: 'center',
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
  labelInput: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6b7280',
    fontFamily: 'Lexend-Regular',
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
  form: {
    marginTop: 32,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 5,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonTab: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#f3f4f6',
    flex: 1,
    borderRadius: 8,
  },
  buttonTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    fontFamily: 'Lexend-Medium',
    textAlign: 'center',
  },
  buttonTabActiveText: {
    color: '#2563eb',
  },
  buttonTabActive: {
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 10,
    color: '#ef4444',
    fontFamily: 'Lexend-Regular',
  },
});
