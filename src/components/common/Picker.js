import * as React from "react"
import { StyleSheet } from "react-native"
import { Picker } from "@react-native-community/picker"

const _Picker = ({ value, items, onChange }) => {
  return (
    <Picker
      mode="dropdown"
      selectedValue={value}
      style={styles.root}
      itemStyle={styles.itemStyle}
      onValueChange={onChange}
    >
      {items.map(({ value, ...props }) => (
        <Picker.Item key={value} value={value} {...props} />
      ))}
    </Picker>
  )
}

const styles = StyleSheet.create({
  root: { height: 36 },
  itemStyle: { fontSize: 14, height: 32 }
})
export default _Picker
