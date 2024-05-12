import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { GlobalStyles } from '../constants/color';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Fibaste
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>
            Let's Begin
          </Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color={GlobalStyles.color.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalStyles.color.white,
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: GlobalStyles.color.fibasteBlue,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 100,
  },
  button: {
    backgroundColor: GlobalStyles.color.fibasteBlue,
    padding: 20,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: GlobalStyles.color.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;