import { View, StyleSheet, Text } from "react-native"
import { NoCard } from "../NoCard"
import { Card } from "../Card"

export function Section(){
  return (
    <View style={styles.boxSection}>
      <View style={styles.boxHeader}>
        <View style={styles.boxCriadas}>
          <Text style={styles.criadas}>Criadas</Text>
          <View style={styles.boxTotalCriada}>
            <Text style={styles.totalCriada}>0</Text>
          </View>
        </View>
        <View style={styles.boxConcluidas}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <View style={styles.boxTotalConcluida}>
            <Text style={styles.totalConcluida}>0</Text>
          </View>
        </View>
      </View>

      <Card />
    </View>
  )
}

const styles = StyleSheet.create({
  boxSection: {
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35
  },
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  boxCriadas: {
    flexDirection: 'row',
    gap: 5
  },
  boxConcluidas: {
    flexDirection: 'row',
    gap: 5
  },
  criadas: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700'
  },
  concluidas: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: '700'
  },
  totalCriada: {
    color: '#D9D9D9',
  },
  totalConcluida: {
    color: '#D9D9D9',
    backgroundColor: '#333333',
  },
  boxTotalCriada: {
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: 'center'
  },
  boxTotalConcluida: {
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: 'center'
  }
})