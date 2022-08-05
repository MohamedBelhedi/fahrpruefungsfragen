import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Alert,ScrollView } from 'react-native';
import { Card,Button,Title,Paragraph } from 'react-native-paper';
import { FahrschulCards } from './FahrshuleCards';




export default function App() {
  
  useEffect(()=>{

  test()




  })
  // code ist eine Probe um mit UseState Hook mich anzufreunden obwohl ich Class liebe🤣
  const[Test,setTest]=useState("Hallo")
  const [Test1,setTest1]=useState("Hallo2")
  const [Test3,setTest3]=useState("Hallo3")
  const test=()=>{
    setTimeout(()=>{
     setTest("Hallo")
      setTest3(Test3) // wird zu einer animation nach 3000 ms 


  },3000)}
  return (
    <View style={styles.container}>
      <Text>{Test}</Text>
      <Text onPress={
        ()=>setTest("Moin Moin")
        
      }> Click mich</Text>
      <StatusBar style="auto" />
<ScrollView>
      {FahrschulCards.map(({name,image,title,click})=>(
        
        <Card style={styles.cardStyle}>
        <Card.Title title={name} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{Test3}</Paragraph>
        </Card.Content>
        <Text onPress={()=>setTest3("Was geht")}>Hi</Text>
        <Card.Cover source={image} />
        <Card.Actions>
      
        </Card.Actions>
        <Button>Cancel</Button>
        <Button onPress={click}>Ok</Button>
      </Card>
   



      ))
        
    
      }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle:{
    width:500,
    height:300,
    left: 0,
    right: 0,
    bottom: 0,
    padding:20,
    flex:1
    
    
        }
});

