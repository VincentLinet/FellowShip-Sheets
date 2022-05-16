import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M23.3 7.77h-7.07V.7A.71.71 0 0 0 16 .2a.68.68 0 0 0-.49-.2H8.47A.68.68 0 0 0 8 .2a.71.71 0 0 0-.21.5v7.07H.7A.71.71 0 0 0 .2 8a.68.68 0 0 0-.2.49v7.06a.68.68 0 0 0 .2.45.71.71 0 0 0 .5.21h7.07v7.09a.71.71 0 0 0 .21.5.68.68 0 0 0 .49.2h7.06a.68.68 0 0 0 .49-.2.71.71 0 0 0 .21-.5v-7.07h7.07a.71.71 0 0 0 .5-.21.68.68 0 0 0 .2-.49V8.47a.68.68 0 0 0-.2-.47.71.71 0 0 0-.5-.21Z" />
    </Svg>
  )
}
export default SvgComponent
