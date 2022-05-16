import * as React from "react"
import { View } from "react-native"

import Row from "./Row"

const Table = ({ data, header, legend, style }) => {
  return (
    <View style={style}>
      {data.map((column, index) => (
        <Row key={`Row-${header?.[index]?.key || index}`} column={column} id={index} headers={header} rows={legend} />
      ))}
    </View>
  )
}
export default Table
