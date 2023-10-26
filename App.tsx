import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { Header } from './src/components/Header';
import { Input } from './src/components/Input';
import { Section } from './src/components/Section';
import { useState } from 'react';

let id = 0
export default function App() {
  const [tec, setTec] = useState('')
  const [arrayTec, setArrayTec] = useState<object[]>([])
  let[concluido, setConcluido] = useState(0)

  const handleTec = () => {
    const newList = arrayTec.concat({id: id, name: tec, checked: false})
    setTec('')
    setArrayTec(newList)
    id += 1
  }
  const removeTec = (id) => {
    const newList = arrayTec.filter((tec) => {
      if(tec.id !== id){
        return tec
      } else{
        if(tec.checked === true){
          setConcluido(concluido -= 1)
        }
      }
    })
    setArrayTec(newList)
  }
  const isChecked = (id) => {
    const newList = arrayTec.map((tec) => {
      if(tec.id === id){
        const newTec = {
          ...tec,
          id: id,
          checked: !tec.checked
        }
        if(newTec.checked === true){
          setConcluido(concluido += 1)
        }
        else{
          setConcluido(concluido -= 1)
        }
        return newTec
      }
      return tec
    })
    setArrayTec(newList)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Input setTec={setTec} handle={handleTec}/>
      <Section 
        arrayTec={arrayTec} 
        removeTec={removeTec} 
        isChecked={isChecked}
        concluido={concluido}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});
