import * as React from "react"
import { Text, TouchableHighlight, StyleSheet, View } from "react-native"

import Theme from "../../constants/Theme"

const School = ({ list, pick, style, edition, editing }) => {
  const [level, setLevel] = React.useState(list.find(({ value }) => value === pick)?.level)

  const increaseLevel = () => {
    const increase = level + 1
    setLevel(increase)
    edition({ pick, level: increase })
  }
  const decreaseLevel = () => {
    const decrease = Math.max(level - 1, 1)
    setLevel(decrease)
    edition({ pick, level: decrease })
  }

  return (
    <View style={styles.root}>
      <Text style={{ ...style, ...styles.field }}>{list.find(({ value }) => value === pick)?.label}</Text>
      <View style={styles.level}>
        {editing && (
          <TouchableHighlight style={styles.highlight} onPress={decreaseLevel} underlayColor={`${Theme.lightblue}50`}>
            <Text style={styles.add}>-</Text>
          </TouchableHighlight>
        )}
        {!editing && <View style={styles.fill} />}
        <Text style={{ ...style, ...styles.field }}>Niveau {level}</Text>
        {editing && (
          <TouchableHighlight style={styles.highlight} onPress={increaseLevel} underlayColor={`${Theme.lightblue}50`}>
            <Text style={styles.add}>+</Text>
          </TouchableHighlight>
        )}
        {!editing && <View style={styles.fill} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  level: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12
  },
  highlight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 30,
    width: 30,
    borderRadius: 18
  },
  field: {
    fontFamily: "RobotoMono_700Bold"
  },
  fill: {
    width: 30
  }
})

export default School
