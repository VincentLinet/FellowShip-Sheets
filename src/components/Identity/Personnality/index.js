import * as React from "react"
import { View, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { StorageContext } from "../../../contexts/Storage"
import Theme from "../../../constants/Theme"
import Field from "../../common/Field"
import Gifts from "./Gifts"
import Separator from "../../common/Separator"
import PickedList from "../../common/PickedList"

import GIFTS from "../../../data/gifts"
import i18n from "../../../i18n"

const LACKS = [
  { value: "blind", label: "Aveugle", cost: 2, effects: [{ target: "skill", skill: "Aveugle" }] },
  { value: "curious", label: "Curieux", effects: [{ target: "skill", skill: "Curieux" }] },
  {
    value: "allayed",
    label: "Dissipé",
    effects: [
      { target: "wisdom", remove: 5 },
      { target: "perception", remove: 10 }
    ]
  }
]

const GIFTS_PICKER = { title: i18n.t("personnality.gifts"), content: <Gifts /> }

const Personnality = () => {
  const { identity, setIdentity } = React.useContext(StorageContext)
  const { gifts, lacks } = identity
  const insets = useSafeAreaInsets()

  const saveGifts = (gifts) => {
    setIdentity({ ...identity, gifts })
  }

  const saveLacks = (lacks) => {
    setIdentity({ ...identity, lacks })
  }

  return (
    <Field style={styles.root(insets)} title="Personnalité">
      <View style={styles.content}>
        <View style={styles.column}>
          <Text style={styles.title}>DONS</Text>
          <PickedList list={GIFTS} picks={gifts} save={saveGifts} picker={GIFTS_PICKER} />
        </View>
        <Separator direction="vertical" />
        <View style={styles.column}>
          <Text style={styles.title}>HANDICAPS</Text>
          <PickedList list={LACKS} picks={lacks} save={saveLacks} />
        </View>
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
    flexDirection: "row",
    borderRadius: Theme.radius,
    backgroundColor: Theme.white,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  column: {
    flex: 1,
    display: "flex"
  },
  title: {
    textAlign: "center",
    fontFamily: "RobotoMono_700Bold",
    paddingHorizontal: 6,
    paddingVertical: 6
  }
})

export default Personnality
