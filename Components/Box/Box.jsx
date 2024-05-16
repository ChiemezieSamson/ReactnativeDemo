import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Box = ({children, Style}) => {
  return (
   <View style={[style.box, Style]}>
    <Text style={style.text}>{children}</Text>
   </View>
  )
}

const style = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
})

export default Box
