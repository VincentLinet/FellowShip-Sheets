import * as React from "react"
import { View, StyleSheet, Text } from "react-native"

import i18n from "../../../i18n"

const Skill = ({ title, skill, style = {} }) => {
  const text = skill === title ? i18n.t("common.skill") : skill
  return <Text style={{ ...style, ...styles.root }}>{text}</Text>
}

const styles = StyleSheet.create({
  root: {
    textAlign: "center"
  }
})
export default Skill
