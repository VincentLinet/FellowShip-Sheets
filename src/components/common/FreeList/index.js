import * as React from "react"
import { Text, TextInput, View, StyleSheet, TouchableHighlight } from "react-native"
import Swipeable from "react-native-gesture-handler/Swipeable"

import Theme from "../../../constants/Theme"
import Take from "../../../assets/icons/take"
import { AcceptAction, RemoveAction, CancelAction, ChangeAction, SaveAction } from "./Actions"

const DefaultItem = ({ pick, index }) => {
  return (
    <Text key={`${pick}-${index}`} style={styles.item}>
      {pick}
    </Text>
  )
}

const FreeList = ({ Item = DefaultItem }) => {
  const [picking, setPicking] = React.useState(false)
  const [picks, setPicks] = React.useState([])
  const [pick, setPick] = React.useState("")
  const [editing, setEditing] = React.useState()
  const [edition, setEdition] = React.useState()

  const enablePicking = () => setPicking(true)
  const disablePicking = () => setPicking(false)

  const addPick = (pick) => () => (pick !== "" && setPicks((picks) => [...picks, pick])) || setPicking(false)

  const removePick = (pick) => () => {
    setEditing()
    setPicks([...picks.slice(0, pick), ...picks.slice(pick + 1)])
  }

  const addEditing = (pick, index) => () => {
    setEditing(pick)
  }

  const cancelEditing = () => {
    setEditing()
  }

  const saveEdition = (pick, index) => () => {
    setEditing()
    setPicks([...picks.slice(0, index), editing, ...picks.slice(index + 1)])
  }

  return (
    <View style={styles.root}>
      {!!picks.length && (
        <View style={styles.gifts}>
          {picks.map((pick, index) => (
            <Swipeable
              key={`${pick}-${index}`}
              renderLeftActions={edition?.value === pick ? SaveAction : ChangeAction}
              renderRightActions={edition?.value === pick ? DiscardAction : RemoveAction}
              onSwipeableRightOpen={edition?.value === pick ? cancelEditing : removePick(index)}
              onSwipeableLeftOpen={edition?.value === pick ? saveEdition(pick, index) : addEditing(pick, index)}
            >
              <Item style={styles.item} pick={pick} index={index} editing={editing === pick} edition={setEdition} />
            </Swipeable>
          ))}
        </View>
      )}
      <View style={styles.button}>
        {!picking && (
          <TouchableHighlight style={styles.highlight} onPress={enablePicking} underlayColor={`${Theme.lightblue}50`}>
            <Text style={styles.add}>+</Text>
          </TouchableHighlight>
        )}
        {picking && (
          <View style={styles.edit}>
            <View style={styles.swipe}>
              <Swipeable
                renderLeftActions={AcceptAction}
                renderRightActions={CancelAction}
                onSwipeableRightOpen={disablePicking}
                onSwipeableLeftOpen={addPick(pick)}
              >
                <View style={styles.edition}>
                  <TextInput style={styles.input} placeholder="Objet" onChangeText={setPick} />
                </View>
              </Swipeable>
            </View>
            <TouchableHighlight style={styles.highlight} onPress={addPick(pick)} underlayColor={`${Theme.lightblue}50`}>
              <View style={styles.icon}>
                <Take fill={Theme.black} />
              </View>
            </TouchableHighlight>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {},
  gifts: {
    paddingBottom: 6
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  highlight: {
    alignSelf: "center",
    height: 36,
    width: 36,
    borderRadius: 18
  },
  add: {
    fontSize: 20,
    color: Theme.lightblue,
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
    height: 36,
    width: 36,
    paddingHorizontal: 6,
    paddingVertical: 6
  },
  edit: {
    display: "flex",
    flexDirection: "row"
  },
  edition: {
    display: "flex",
    flexDirection: "row"
  },
  swipe: {
    flex: 1
  },
  input: {
    height: "100%",
    flexShrink: 0,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: Theme.lightblue,
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 6,
    marginRight: 6
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
})
export default FreeList
