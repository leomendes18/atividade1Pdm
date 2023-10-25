import { View, StyleSheet, Text } from "react-native";

export function Header(){
  return (
    <View style={styles.boxHeader}>
      <Text style={styles.title}>Minhas tecnologias</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  boxHeader: {
    backgroundColor: '#0D0D0D',
    height: 150,
    alignItems: 'center'
  },
  title: {
    color: '#4EA8DE',
    fontSize: 22,
    marginTop: 40,
    fontWeight: '900'
  }
})