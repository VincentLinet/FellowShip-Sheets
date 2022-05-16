import * as React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { StorageContext } from "../../../contexts/Storage"
import { ModalContext } from "../../../contexts/Modal"
import Gift from "./Gift"
import GIFTS from "../../../data/gifts"
import Button from "../../common/Buttons"
import Separator from "../../common/Separator"

const Gifts = () => {
  const { identity, ...Storage } = React.useContext(StorageContext)
  const Modal = React.useContext(ModalContext)
  const { gifts } = identity
  const [edition, setEdition] = React.useState(gifts)
  const insets = useSafeAreaInsets()
  const sorted = GIFTS.sort((a, b) => a.label.localeCompare(b.label))

  const save = () => {
    Storage.setIdentity({ ...identity, gifts: edition })
    Modal.setContent()
  }
  const cancel = () => Modal.setContent()

  const add = (gift) => () => setEdition((edition) => [...edition, gift])
  const remove = (gift) => () => {
    const index = edition.indexOf(gift)
    setEdition((edition) => [...edition.slice(0, index), ...edition.slice(index + 1, edition.length)])
  }

  const render = ({ value, ...props }) => (
    <Gift key={`Gift-${value}`} {...props} value={value} picked={edition.includes(value)} add={add} remove={remove} />
  )

  return (
    <View style={styles.root(insets)}>
      <ScrollView style={styles.container}>
        <View style={styles.inner}>{sorted.map(render)}</View>
      </ScrollView>
      <Separator color="grey1" noMargin />
      <View style={styles.buttons}>
        <Button kind="cancelation" style={styles.button} onPress={cancel} />
        <Button kind="validation" style={styles.button} onPress={save} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: (insets) => ({
    marginBottom: insets.bottom + 60
  }),
  container: {},
  inner: {
    alignSelf: "center",
    width: 280,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: 280,
    height: 50,
    margin: 5
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 128,
    margin: 5
  }
})

export default Gifts
