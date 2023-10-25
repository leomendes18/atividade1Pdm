import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";

export function Input(){
  return (
    <View style={styles.viewInput}>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tecnologia"
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity style={styles.button}>
         <Image source={require('../../../assets/iconMore.png')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: -30
  },
  input: {
    backgroundColor: '#262626',
    width: 260,
    height: 50,
    padding: 16,
    borderRadius: 6,
    fontSize: 16
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 50,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
})