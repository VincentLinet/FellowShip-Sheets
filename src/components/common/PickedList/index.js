import * as React from "react"
import { Text, View, StyleSheet, TouchableHighlight } from "react-native"
import Swipeable from "react-native-gesture-handler/Swipeable"

import Theme from "../../../constants/Theme"
import { ModalContext } from "../../../contexts/Modal"
import Picker from "../Picker"
import { AcceptAction, RemoveAction, CancelAction, ChangeAction, SaveAction } from "./Actions"

const DefaultItem = ({ list, pick, index }) => {
  return (
    <Text key={`${pick}-${index}`} style={styles.item}>
      {list.find(({ value }) => value === pick)?.label}
    </Text>
  )
}

const PickedList = ({ list, picks, save, Item = DefaultItem, picker = {} }) => {
  const [picking, setPicking] = React.useState(false)
  const [pick, setPick] = React.useState(list[0].value)
  const [editing, setEditing] = React.useState()
  const [edition, setEdition] = React.useState()
  const Modal = React.useContext(ModalContext)

  // const enablePicking = () => setPicking(true)
  // const disablePicking = () => setPicking(false)

  // const addPick = (pick) => () => save([...picks, pick]) || setPicking(false)

  // const removePick = (pick) => () => {
  //   setEditing()
  //   save([...picks.slice(0, pick), ...picks.slice(pick + 1, picks.length)])
  // }

  // const addEditing = (pick) => () => setEditing(pick)

  // const cancelEditing = () => setEditing()

  // const saveEdition = (pick, index) => () => {
  //   setEditing()
  //   save([...picks.slice(0, index), editing, ...picks.slice(index + 1)])
  // }

  const enablePicking = () => Modal.setContent(picker)
  const disablePicking = () => {}

  const addPick = () => {}

  const removePick = () => {}

  const addEditing = () => {}

  const cancelEditing = () => {}

  const saveEdition = () => {}

  return (
    <View style={styles.root}>
      {picks?.length && (
        <View style={styles.gifts}>
          {picks.map((pick, index) => (
            <Swipeable
              key={`${pick}-${index}`}
              renderLeftActions={edition?.value === pick ? SaveAction : ChangeAction}
              renderRightActions={edition?.value === pick ? DiscardAction : RemoveAction}
              onSwipeableRightOpen={edition?.value === pick ? cancelEditing : removePick(index)}
              onSwipeableLeftOpen={edition?.value === pick ? saveEdition(pick, index) : addEditing(pick, index)}
            >
              <Item
                style={styles.item}
                list={list}
                pick={pick}
                index={index}
                editing={editing === pick}
                edition={setEdition}
              />
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
          <Swipeable
            renderLeftActions={AcceptAction}
            renderRightActions={CancelAction}
            onSwipeableRightOpen={disablePicking}
            onSwipeableLeftOpen={addPick(pick)}
          >
            <Picker value={pick} items={list} onChange={setPick} />
          </Swipeable>
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
  }
})
export default PickedList
