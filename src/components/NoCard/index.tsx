import { Image, StyleSheet, Text, View } from "react-native";

export function NoCard(){
  return (
    <View style={styles.boxNoCard}>
      <Image source={require('../../../assets/Clipboard.png')} style={styles.img} />
      <View style={styles.boxText}>
        <Text style={styles.text}>Você ainda não tem tecnologias cadastradas</Text>
        <Text style={styles.text2}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxNoCard: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    marginTop: 20
  },
  boxText: {
    marginTop: 20,
    alignItems: 'center'
  },
  img: {
    marginTop: 50
  },
  text: {
    color: '#808080',
    fontWeight: '700',
    fontSize: 14
  },
  text2: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 14
  }
})