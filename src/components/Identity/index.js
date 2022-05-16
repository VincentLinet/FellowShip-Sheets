import * as React from "react"
import { ScrollView } from "react-native"

import Personnality from "./Personnality"
import Story from "./Story"

const Identity = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Story />
      <Personnality />
    </ScrollView>
  )
}

export default Identity
