import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import Slider from "@react-native-community/slider"

import Theme from "../../constants/Theme"

const defaultFormat = (value) => value

const Status = ({ Icon, value, color, secondary, maximum, minimum = 0, format = defaultFormat, onSlidingComplete }) => {
  const [current, setCurrent] = React.useState(value)
  const fill = current > 0 ? color : current < 0 ? secondary : Theme.black

  const updateCurrent = (current) => setCurrent(current)

  return (
    <View style={styles.status}>
      <View style={styles.span}>
        <Icon fill={fill} {...styles.icon} />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={minimum}
        maximumValue={maximum}
        minimumTrackTintColor={current > 0 ? color : Theme.grey1}
        maximumTrackTintColor={current < 0 ? secondary : Theme.grey1}
        step={1}
        value={value}
        onValueChange={updateCurrent}
        onSlidingComplete={onSlidingComplete}
      />
      <Text style={{ ...styles.value, color: fill }}>{format(current)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  status: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  slider: {
    flexGrow: 1,
    flexShrink: 0
  },
  icon: {
    height: 20,
    width: 20
  },
  span: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30
  },
  value: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 30,
    fontFamily: "Roboto_700Bold"
  }
})

export default Status
