import * as React from "react"
import { ScrollView } from "react-native"

import Quests from "./Quests"
import Note from "./Note"

const Notes = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Quests />
      <Note />
    </ScrollView>
  )
}

export default Notes
