import * as React from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"
import Theme from "../../../constants/Theme"

const Cell = ({ value, onChangeText }) => {
  const { style = {} } = value
  const renderText = ({ text }) => <Text style={styles.text}>{text}</Text>
  const renderIcon = ({ Icon }) => <Icon style={styles.icon} fill={Theme.black} />
  const renderInput = (value) => (
    <TextInput style={styles.input} value={`${value}`} keyboardType="numeric" onChangeText={onChangeText} />
  )
  const renderComponent = (Component) => <Component style={styles.component} fill={Theme.black} />

  const render =
    value instanceof Function ? renderComponent : value.Icon ? renderIcon : value.disabled ? renderText : renderInput

  return <View style={{ ...styles.root, ...style }}>{render(value)}</View>
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 26,
    margin: 10
  },
  text: {
    fontFamily: "RobotoMono_700Bold"
  },
  input: {
    fontFamily: "RobotoMono_400Regular"
  }
})

export default Cell
