import * as React from "react"
import { TouchableOpacity } from "react-native"

import Theme from "../../constants/Theme"
import Die from "../../assets/icons/die"

const Roll = ({ color = Theme.black, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Die fill={color} onClick={onClick} />
    </TouchableOpacity>
  )
}

export default Roll
