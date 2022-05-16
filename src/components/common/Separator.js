import * as React from "react"
import { StyleSheet, Animated } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import Theme from "../../constants/Theme"

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const LOCATIONS = [0, 0.2, 0.5, 0.8, 1]
const HORIZONTAL = { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } }
const VERTICAL = {}

const Separator = ({ direction = "horizontal", color = "lightblue", noMargin }) => {
  const props = direction === "vertical" ? VERTICAL : HORIZONTAL
  const theme = Theme[color]
  const colors = [`${theme}00`, theme, theme, theme, `${theme}00`]

  return <AnimatedLinearGradient style={styles[direction](noMargin)} colors={colors} locations={LOCATIONS} {...props} />
}

const styles = StyleSheet.create({
  vertical: (noMargin) => ({
    width: 1,
    marginHorizontal: noMargin ? 0 : 6
  }),
  horizontal: (noMargin) => ({
    height: 1,
    marginVertical: noMargin ? 0 : 6
  })
})

export default Separator
