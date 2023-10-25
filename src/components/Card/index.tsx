import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export function Card(){
  return (
    <View style={styles.boxCard}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonCheck}
      >
        <Image source={require('../../../assets/check.png')} style={styles.check}/>
      </TouchableOpacity>
      <Text style={styles.textCard}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <TouchableOpacity
         activeOpacity={0.5}
         style={styles.buttonLixeira}
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
    borderColor: '#333333'
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
    height: 40,
    lineHeight: 19.6
  }
})