import * as React from "react"
import { StyleSheet, Text, View } from "react-native"

import Theme from "../../../constants/Theme"

const Action = ({ text, color, style }) => {
  return (
    <View style={{ ...styles.root, ...style, backgroundColor: color }}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 4,
    justifyContent: "center",
    height: 32
  },
  text: {
    color: Theme.white,
    paddingHorizontal: 12,
    fontFamily: "Roboto_700Bold"
  }
})

export default Action

const DiscardAction = (props) => <Action style={{ alignItems: "flex-end" }} color={Theme.red} {...props} />
const ApproveAction = (props) => <Action style={{ flex: 1 }} color={Theme.lightblue} {...props} />

export const CancelAction = () => <DiscardAction text="Annuler" />
export const RemoveAction = () => <DiscardAction text="Retirer" />
export const AcceptAction = () => <ApproveAction text="Ajouter" />
export const ChangeAction = () => <ApproveAction text="Modifier" />
export const SaveAction = () => <ApproveAction text="Enregistrer" />
