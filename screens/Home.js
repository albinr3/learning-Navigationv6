import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const Home = () => {

  const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>

      <Pressable onPress={() => navigation.navigate("Stack")} style={{backgroundColor: "purple", padding: 5, width: "50%", alignSelf: "center"}}>
        <Text style={{color: "white", fontWeight: "bold", textAlign: "center"}}>Got to Stack Screen</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})