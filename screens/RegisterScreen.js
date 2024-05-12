import { useNavigation } from '@react-navigation/native';

import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { GlobalStyles } from '../constants/color';

import GooglePNG from '../assets/misc/google.png';
import FacebookPNG from '../assets/misc/facebook.png';
import ApplePNG from '../assets/misc/apple.png';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
        <Text style={styles.title}>Register</Text>

        <View style={styles.socialContainer}>
          {/* Google */ }
          <TouchableOpacity
            onPress={() => {}}
            style={styles.iconHolder}>
            <Image source={GooglePNG} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>

          { /* Facebook */ }
          <TouchableOpacity
            onPress={() => {}}
            style={styles.iconHolder}>
            <Image source={FacebookPNG} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>

          { /* Apple */ }
          <TouchableOpacity
            onPress={() => {}}
            style={styles.iconHolder}>
            <Image source={ApplePNG} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <MaterialIcons
              name="lock-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <MaterialIcons
              name="lock-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        <CustomButton label={'Register'} onPress={() => {}} />

        <View style={styles.loginContainer}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => { console.log('Pressed... switching to Home'); navigation.navigate('Login'); }}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  iconHolder: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  registerText: {
    textAlign: 'center', 
    color: '#666', 
    marginBottom: 30
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: GlobalStyles.color.fibasteBlue, 
    fontWeight: '700'
  },
});

export default RegisterScreen;