import * as React from "react"
import { Text, StyleSheet } from "react-native"

const Quest = ({ pick, index, style }) => {
  return (
    <Text key={`${pick}-${index}`} style={{ ...style, ...styles.root }}>
      {pick}
    </Text>
  )
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "RobotoMono_700Bold"
  }
})

export default Quest
