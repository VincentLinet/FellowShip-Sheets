import * as React from "react"
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import * as Keyboard from "../../../services/keyboard"
import Close from "../../../assets/icons/close"
import Theme from "../../../constants/Theme"
import Separator from "../Separator"

const { height } = Dimensions.get("window")

const Content = ({ title, content, close }) => {
  const insets = useSafeAreaInsets()

  return (
    <KeyboardAvoidingView style={styles.root(insets)} behavior={Keyboard.behavior} enabled>
      <View style={styles.header}>
        <View style={styles.title}>{title && <Text style={styles.text}>{title}</Text>}</View>
        <TouchableOpacity style={styles.close} onPress={close}>
          <Close style={styles.closeIcon} fill={Theme.black} />
        </TouchableOpacity>
      </View>
      <Separator noMargin />
      <View style={styles.content(insets)}>{content}</View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: (insets) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    maxHeight: height - insets.top,
    display: "flex",
    flexDirection: "column",
    backgroundColor: Theme.white
  }),
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: Theme.white
  },
  title: {
    width: "100%",
    marginRight: 20
  },
  text: {
    width: "100%",
    fontSize: 20,
    fontFamily: "Roboto_400Regular",
    textAlign: "center"
  },
  close: {
    width: 24,
    height: 24
  },
  closeIcon: {
    width: 24,
    height: 24
  },
  content: (insets) => ({
    paddingHorizontal: 24,
    maxHeight: height - insets.top - insets.bottom,
    backgroundColor: Theme.white
  })
})
export default Content
