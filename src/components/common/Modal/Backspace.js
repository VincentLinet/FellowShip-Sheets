import * as React from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"

const Backspace = ({ close }) => {
  return (
    <View style={styles.root}>
      <TouchableWithoutFeedback onPress={close}>
        <View style={styles.inner} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  inner: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default Backspace
