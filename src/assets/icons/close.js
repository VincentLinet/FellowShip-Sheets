import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7 5.3a1 1 0 0 1 0 1.4l-12 12a1 1 0 0 1-1.4-1.4l12-12a1 1 0 0 1 1.4 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.3 5.3a1 1 0 0 1 1.4 0l12 12a1 1 0 0 1-1.4 1.4l-12-12a1 1 0 0 1 0-1.4Z"
      />
    </Svg>
  )
}
export default SvgComponent
