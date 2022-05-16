import * as React from "react"
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Theme from "../../constants/Theme"
import Field from "../common/Field"
import PickedList from "../common/PickedList"
import School from "./School"

const MAGIC = [
  { value: "arcanes", label: "Arcanes", description: "Coucou", level: 1 },
  { value: "light", label: "Lumière", description: "Coucou", level: 1 },
  { value: "death", label: "Mort", description: "Coucou", level: 1 },
  { value: "destruction", label: "Destruction", description: "Coucou", level: 1 },
  { value: "shapeshifting", label: "Métamorphose", description: "Coucou", level: 1 },
  { value: "blood", label: "Sang", description: "Coucou", level: 1 },
  { value: "earth", label: "Terre", description: "Coucou", level: 1 },
  { value: "water", label: "Eau", description: "Coucou", level: 1 },
  { value: "fire", label: "Feu", description: "Coucou", level: 1 },
  { value: "ether", label: "Ether", description: "Coucou", level: 1 },
  { value: "nature", label: "Nature", description: "Coucou", level: 1 },
  { value: "invocation", label: "Invocation", description: "Coucou", level: 1 },
  { value: "impregnation", label: "Imprégnation", description: "Coucou", level: 1 },
  { value: "spirit", label: "Esprit", description: "Coucou", level: 1 }
]

const Magic = () => {
  const insets = useSafeAreaInsets()

  return (
    <Field style={styles.root(insets)} title="Grimoire">
      <View style={styles.content}>
        <PickedList list={MAGIC} Item={School} />
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
export default Magic
