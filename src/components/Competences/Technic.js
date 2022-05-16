import * as React from "react"
import { Text, StyleSheet, View } from "react-native"

const Technic = ({ list, pick, index, style }) => {
  return (
    <Text key={`${pick}-${index}`} style={{ ...style, ...styles.root }}>
      {list.find(({ value }) => value === pick)?.label}
    </Text>
  )
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "RobotoMono_700Bold"
  }
})

export default Technic
