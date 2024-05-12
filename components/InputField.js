import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/color';

export default function InputField({ label, icon, inputType ,keyboardType, fieldButtonLabel, fieldButtonFunction }) {
  return (
    <View
      style={styles.outerView}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={styles.textInput}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.text}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
  },
  text: {
    color: GlobalStyles.color.fibasteBlue,
    fontWeight: '700',
  }
});