import * as React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Theme from "../../../constants/Theme"

import i18n from "../../../i18n"

const Cancelation = ({ style, action, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.root, ...style }} onPress={action || onPress}>
      <Text style={styles.text}>{i18n.t("common.cancel")}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {},
  text: {
    color: Theme.red
  }
})
export default Cancelation
