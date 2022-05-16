import * as React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

import Theme from "../../../constants/Theme"
import Effects from "./Effects"
import Separator from "../../common/Separator"

const Gift = ({ label, value, effects, picked, add, remove }) => {
  const action = picked ? remove : add
  const root = picked ? selected.root : {}
  const title = picked ? selected.title : {}
  const separator = picked ? "white" : "lightblue"
  return (
    <TouchableOpacity style={{ ...styles.root, ...root }} onPress={action(value)}>
      <View>
        <Text style={{ ...styles.title, ...title }}>{label}</Text>
        <Separator direction="horizontal" color={separator} />
        <Effects effects={effects} value={value} label={label} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {
    width: 130,
    height: 130,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: Theme.grey1,
    borderRadius: Theme.radius
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: Theme.lightblue,
    fontFamily: "Roboto_700Bold"
  }
})

const selected = StyleSheet.create({
  root: {
    backgroundColor: `${Theme.lightblue}`
  },
  title: {
    color: "white"
  }
})

export default Gift
