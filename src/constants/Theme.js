import { Easing } from "react-native"

const white = "#ffffff"
const black = "#3f414e"
const darkblue = "#1565c0"
const lightblue = "#5eb8ff"
const lightblue2 = "#b9e4e4"
const orange = "#eC9477"
const beige = "#dbc7b7"
const pink = "#ed88ae"
const purple = "#4527a0"
const red = "#ad1457"
const green = "#077375"

const errorRed = "#f26464"

const grey1 = "#f5f5f9"
const grey2 = "#a1a4b2"
const grey3 = "#666666"

const transparent = "transparent"

const radius = 8

const shadow = {
  shadowOpacity: 0.25,
  shadowOffset: { width: 0, height: 5 },
  shadowRadius: 2,
  shadowColor: black,
  elevation: 5
}

const transitionEasing = Easing.bezier(0.4, 0, 0.2, 1)

export default {
  white,
  black,
  darkblue,
  lightblue,
  lightblue2,
  orange,
  beige,
  pink,
  red,
  errorRed,
  green,
  purple,
  grey1,
  grey2,
  grey3,
  transparent,
  radius,
  shadow,
  transitionEasing
}
