import React, { useEffect, useRef } from "react"
import { StyleSheet, TouchableOpacity, Text, Animated } from "react-native"
import Theme from "../../constants/Theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import useKeyboardStatus from "../../hooks/useKeyboardStatus"

const BAR_SIZE = 60

const Tabs = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets()
  const translateYValue = useRef(new Animated.Value(0)).current
  const isKeyboardShown = useKeyboardStatus()
  const { navigate, emit } = navigation
  const { routes } = state

  const onPress = (route, isFocused) => () => {
    const { name } = route
    if (!isFocused) navigate(name)
  }

  const onLongPress = (route) => () => {
    const { key: target } = route
    const type = "tabLongPress"
    emit({ type, target })
  }

  useEffect(() => {
    Animated.timing(translateYValue, { toValue: +!isKeyboardShown, useNativeDriver: true, duration: 250 }).start()
  })

  return (
    <Animated.View style={styles.bar(insets, translateYValue, isKeyboardShown)}>
      {routes.map((route, index) => {
        const { options } = descriptors[route.key]
        return (
          <Tab
            key={index}
            route={route}
            options={options}
            focused={state.index === index}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        )
      })}
    </Animated.View>
  )
}

const Tab = ({ route, options, focused, onPress, onLongPress }) => {
  const { title, tabBarLabel, tabBarAccessibilityLabel, icon: Icon, disabled } = options
  const label = tabBarLabel || title || route.name

  const tabStyle = focused ? [styles.tab, styles.tabFocused] : [styles.tab]
  const labelStyle = focused ? [styles.label, styles.labelFocused] : [styles.label]

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityStates={focused ? ["selected"] : []}
      accessibilityLabel={tabBarAccessibilityLabel}
      onPress={onPress(route, focused)}
      onLongPress={onLongPress(route)}
      style={tabStyle}
      activeOpacity={1}
      disabled={disabled}
    >
      {Icon && <Icon fill={focused ? Theme.lightblue : Theme.black} />}
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bar: (insets, translateYValue, isKeyboardShown) => ({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.grey1,
    height: BAR_SIZE + insets.bottom,
    paddingLeft: 20 + insets.left,
    paddingRight: 20 + insets.right,
    paddingTop: 5,
    paddingBottom: 5 + insets.bottom,
    transform: [
      {
        translateY: translateYValue.interpolate({
          inputRange: [0, 1],
          outputRange: [BAR_SIZE - insets.bottom, 0]
        })
      }
    ],
    position: isKeyboardShown ? "absolute" : null,
    bottom: 0,
    left: 0,
    right: 0
  }),
  tab: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  label: {
    color: Theme.black,
    fontFamily: "Roboto_400Regular",
    fontSize: 10
  },
  labelFocused: {
    color: Theme.lightblue
  }
})

export default Tabs
