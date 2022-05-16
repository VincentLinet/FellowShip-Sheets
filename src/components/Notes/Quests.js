import * as React from "react"
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Theme from "../../constants/Theme"
import Field from "../common/Field"
import PopupList from "../common/PopupList"
import Quest from "./Quest"

const Quests = () => {
  const insets = useSafeAreaInsets()

  return (
    <Field style={styles.root(insets)} title="Quêtes">
      <View style={styles.content}>
        <PopupList Item={Quest} />
      </View>
    </Field>
  )
}

const styles = StyleSheet.create({
  root: (insets) => ({
    paddingLeft: 10 + insets.left,
    paddingRight: 10 + insets.right
  }),
  content: {
    display: "flex",
    borderRadius: Theme.radius,
    backgroundColor: Theme.white,
    paddingTop: 10,
    paddingHorizontal: 6,
    paddingBottom: 6
  },
  item: {
    fontFamily: "RobotoMono_700Bold"
  }
})
export default Quests
