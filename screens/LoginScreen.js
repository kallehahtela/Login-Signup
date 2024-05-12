import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { GlobalStyles } from '../constants/color';

import GooglePNG from '../assets/misc/google.png';
import FacebookPNG from '../assets/misc/facebook.png';
import ApplePNG from '../assets/misc/apple.png';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import HomeScreen from './HomeScreen';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            style={styles.inputFieldIcon}
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
            style={styles.inputFieldIcon}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {}} />

        <Text style={styles.loginText}>Or, login with ...</Text>

        <View style={styles.socialContainer}>
          { /* Google */}
          <TouchableOpacity
            onPress={() => {}}
            style={styles.iconHolder}>
            <Image source={GooglePNG} style={{height: 24, width: 24}} />
          </TouchableOpacity>

          { /* Facebook */ }
          <TouchableOpacity
            onPress={() => {}}
            style={styles.iconHolder}>
            <Image source={FacebookPNG} style={{height: 24, width: 24}} />
          </TouchableOpacity>
          
          {/* Apple */ }
          <TouchableOpacity
            onPress={() => {}}
            style={styles.iconHolder}>
            <Image source={ApplePNG} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => { console.log('clicked and switching to Register screen'); navigation.navigate('Register'); }}>
            <Text style={styles.registerText}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: GlobalStyles.color.black,
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: GlobalStyles.color.light_grey
  },
  inputFieldIcon: {
    color: GlobalStyles.color.dark_grey,
    marginRight: 5,
  },
  loginText: {
    textAlign: 'center', 
    color: GlobalStyles.color.dark_grey, 
    marginBottom: 30
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  iconHolder: {
    borderColor: GlobalStyles.color.light_grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  registerText: {
    color: GlobalStyles.color.fibasteBlue, 
    fontWeight: '700'
  },
});

export default LoginScreen;