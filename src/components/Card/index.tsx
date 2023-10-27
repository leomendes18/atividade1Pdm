import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props{
  tec: {id: number, name?: string, checked: boolean},
  removeTec: (id: number) => void,
  isChecked: (id: number) => void
}

export function Card({tec, removeTec, isChecked}: Props){
  const removeTec2 = () => {
    removeTec(tec.id)
  }
  const isChecked2 = () => {
    isChecked(tec.id)
  }
  return (
    <View style={styles.boxCard}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonCheck}
        onPress={isChecked2}
      > 
        {
          tec.checked === true && (
            <Image source={require('../../../assets/checked.png')} style={styles.check}/>
          )
        }
        {
          tec.checked === false && (
            <Image source={require('../../../assets/check.png')} style={styles.check}/>
          )
        }
      </TouchableOpacity>

      {
        tec.checked === true && (
          <Text style={styles.textCardLine}>{tec.name}</Text>
        )
      }
      {
        tec.checked === false && (
          <Text style={styles.textCard}>{tec.name}</Text>   
        )
      }

      <TouchableOpacity
         activeOpacity={0.5}
         style={styles.buttonLixeira}
         onPress={removeTec2}
      >
        <Image source={require('../../../assets/lixeira.png')} style={styles.lixeira}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  boxCard: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    width: 327,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 10
  },
  buttonCheck: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  check: {
    width: 17.45,
    height: 17.45
  },
  buttonLixeira: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lixeira: {
    width: 12.48,
    height: 14
  },
  textCard: {
    fontSize: 14,
    fontWeight: '400',
    color: '#F2F2F2',
    width: 235,
    lineHeight: 19.6
  },
  textCardLine: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
    width: 235,
    lineHeight: 19.6,
    textDecorationLine: "line-through"
  }
})