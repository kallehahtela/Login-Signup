import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { GlobalStyles } from '../constants/color';

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.color.fibasteBlue,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: GlobalStyles.color.white,
  }
});