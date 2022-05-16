import * as React from "react"
import { View, StyleSheet } from "react-native"

import Skill from "./Skill"
import Statistic from "./Statistic"

const getModifier = (target) => {
  switch (target) {
    case "skill":
      return Skill
    default:
      return Statistic
  }
}

const Effects = ({ effects, value, label }) => {
  return (
    <View style={styles.root}>
      {effects.map(({ target, skill, add, unlimited, cost }, index) => {
        const Modifier = getModifier(target)
        const key = `Gift-${value}-effect-${index}`
        return <Modifier key={key} style={styles.effect} target={target} title={label} skill={skill} add={add} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {},
  effect: { marginVertical: 5 }
})
export default Effects
