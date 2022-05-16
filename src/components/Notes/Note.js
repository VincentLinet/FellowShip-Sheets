import * as React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Theme from "../../constants/Theme"
import Field from "../common/Field"

const Note = () => {
  const [story, setNote] = React.useState("")
  const insets = useSafeAreaInsets()

  const onNoteChange = (story) => setNote(story)

  return (
    <Field style={styles.root(insets)} title="Histoire">
      <View style={styles.container}>
        <TextInput style={styles.input} value={story} onChange={onNoteChange} multiline />
      </View>
    </Field>
  )
}

const styles = StyleSheet.create({
  root: (insets) => ({
    paddingLeft: 10 + insets.left,
    paddingRight: 10 + insets.right
  }),
  container: {
    borderRadius: Theme.radius,
    backgroundColor: Theme.white,
    paddingTop: 12
  },
  input: {
    minHeight: 201,
    paddingHorizontal: 12,
    paddingVertical: 12
  }
})
export default Note
