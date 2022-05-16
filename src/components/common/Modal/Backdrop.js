import * as React from "react"
import { Animated, StyleSheet } from "react-native"

import Theme from "../../../constants/Theme"

const Backdrop = ({ fade }) => {
  return <Animated.View style={[styles.modalBackdrop, fade]} />
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Theme.black,
    opacity: 0.25
  }
})
export default Backdrop
