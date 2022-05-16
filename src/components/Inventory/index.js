import * as React from "react"
import { ScrollView, Text } from "react-native"

import Equipment from "./Equipment"
import Bag from "./Bag"

const Inventory = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Equipment />
      <Bag />
    </ScrollView>
  )
}

export default Inventory
