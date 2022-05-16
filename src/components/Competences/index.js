import * as React from "react"
import { ScrollView } from "react-native"
import Magic from "./Magic"
import Technics from "./Technics"

const Competences = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Technics />
      <Magic />
    </ScrollView>
  )
}

export default Competences
