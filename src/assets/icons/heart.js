import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M5.05 16.84a39.07 39.07 0 0 1 6.22 5.48 1 1 0 0 0 1.46 0A39.07 39.07 0 0 1 19 16.84s5.41-3.74 5-9.15a6.49 6.49 0 0 0-5.13-6.2 6.84 6.84 0 0 0-6.16 1.86 1 1 0 0 1-1.38 0 6.87 6.87 0 0 0-6.18-1.86A6.5 6.5 0 0 0 0 7.7c-.38 5.4 5 9.14 5 9.14Z" />
    </Svg>
  )
}
export default SvgComponent
