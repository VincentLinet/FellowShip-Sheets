import * as React from "react"
import { View, StyleSheet } from "react-native"

import Cell from "./Cell"

const Row = ({ column, headers, id, rows }) => {
  return (
    <View style={styles.root}>
      {column.map((value, index) => (
        <Cell key={`${headers?.[id]?.key || id}-${rows[index]?.text || index}`} value={value} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
})

export default Row
