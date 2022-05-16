import * as React from "react"
import { Text, StyleSheet } from "react-native"

import i18n from "../../../i18n"

const Statistic = ({ target, add, style = {} }) => {
  const key = `common.${target}`
  const text = `${i18n.t(key)} + ${add || ""}`
  return <Text style={{ ...style, ...styles.root }}>{text}</Text>
}

const styles = StyleSheet.create({
  root: {
    textAlign: "center"
  }
})
export default Statistic
