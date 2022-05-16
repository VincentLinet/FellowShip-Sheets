import * as React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Theme from "../../../constants/Theme"

import i18n from "../../../i18n"

const Validation = ({ style, action, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.root, ...style }} onPress={action || onPress}>
      <Text style={styles.text}>{i18n.t("common.save")}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    borderColor: Theme.lightblue,
    borderRadius: Theme.radius,
    borderWidth: 1
  },
  text: {
    color: Theme.lightblue
  }
})
export default Validation
