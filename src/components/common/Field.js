import * as React from "react"
import { StyleSheet, Text, ScrollView, View } from "react-native"
import Theme from "../../constants/Theme"

const Field = ({ title, style, children }) => {
  return (
    <View style={{ ...styles.root, ...style }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex"
  },
  title: {
    display: "flex",
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    letterSpacing: 1,
    color: Theme.lightblue,
    paddingHorizontal: 12,
    paddingVertical: 20
  },
  content: {
    flex: 1
  }
})

export default Field
