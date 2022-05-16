import * as React from "react"
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Theme from "../../constants/Theme"
import Field from "../common/Field"
import PickedList from "../common/PickedList"
import Item from "./Item"

const SKILLS = [
  { value: "cleaver", label: "Assommoir", description: "Coucou", nature: "pick" },
  { value: "warweapon", label: "Armes de Guerre", description: "Coucou", nature: "pick" },
  { value: "trip", label: "Renversement", description: "Coucou", nature: "pick" },
  { value: "chaining", label: "Enchaînement", description: "Coucou", nature: "pick" },
  { value: "disarmement", label: "Désarmement", description: "Coucou", nature: "pick" },
  { value: "retaliation", label: "Riposte", description: "Coucou", nature: "pick" }
]

const Equipement = () => {
  const insets = useSafeAreaInsets()

  return (
    <Field style={styles.root(insets)} title="Équipement">
      <View style={styles.content}>
        <PickedList list={SKILLS} Item={Item} />
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
export default Equipement
