import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M3 18.45a5.6 5.6 0 0 0-1.68 4 1.4 1.4 0 0 0 .38 1.07 1.38 1.38 0 0 0 1 .45.34.34 0 0 0 .34-.32 49 49 0 0 1 .44-4.95.31.31 0 0 0-.16-.32.32.32 0 0 0-.35 0ZM6.83 6.81a.34.34 0 0 1-.06.12h-.42a.89.89 0 0 0-.62.25.91.91 0 0 0-.28.54.31.31 0 0 1-.25 0 .34.34 0 0 1-.2-.13l-.84-1.44a1.07 1.07 0 0 1-.1-.82 1.05 1.05 0 0 1 .52-.63A1.08 1.08 0 0 1 6 5.13l.8 1.42a.39.39 0 0 1 .03.26ZM19.38 17.52a8.44 8.44 0 0 0-1.49-3.43.79.79 0 0 0-.5-.28.71.71 0 0 0-.54.16A7.76 7.76 0 0 1 12 15.54 7.72 7.72 0 0 1 7.16 14a.73.73 0 0 0-.55-.16.79.79 0 0 0-.49.28 8.3 8.3 0 0 0-1.5 3.43C4.4 19 4.12 21.08 4 23.08a.84.84 0 0 0 .24.65.87.87 0 0 0 .63.27H6a.65.65 0 0 0 .65-.57 10.21 10.21 0 0 1 .87-3.06 3.81 3.81 0 0 1 1.42-1.61 3.9 3.9 0 0 1 2.07-.6h2a3.88 3.88 0 0 1 3.49 2.21 10.51 10.51 0 0 1 .87 3.06.65.65 0 0 0 .63.57h1.08a.87.87 0 0 0 .63-.27.88.88 0 0 0 .24-.65c-.11-2-.38-4.09-.61-5.56ZM21 18.45a5.6 5.6 0 0 1 1.68 4 1.4 1.4 0 0 1-.38 1.07 1.38 1.38 0 0 1-1 .45.34.34 0 0 1-.34-.32 49 49 0 0 0-.44-4.95.31.31 0 0 1 .16-.32.32.32 0 0 1 .35 0Z" />
      <Path d="M16.37 23a8.93 8.93 0 0 0-.71-2.25 2.94 2.94 0 0 0-1.07-1.22A3 3 0 0 0 13 19.1h-2a3 3 0 0 0-1.56.45 2.94 2.94 0 0 0-1.07 1.22A8.93 8.93 0 0 0 7.63 23a.83.83 0 0 0 .81 1h7.12a.83.83 0 0 0 .81-1ZM19.85 6.15 19 7.59a.34.34 0 0 1-.46.13.85.85 0 0 0-.27-.54.93.93 0 0 0-.63-.25h-.42a.33.33 0 0 1 0-.38L18 5.13a1.08 1.08 0 0 1 1.4-.43 1.05 1.05 0 0 1 .52.63 1 1 0 0 1-.07.82ZM18 8.42a.17.17 0 0 0 0-.07.85.85 0 0 0-.27-.54.93.93 0 0 0-.63-.25H6.89a.89.89 0 0 0-.62.25.91.91 0 0 0-.27.54.17.17 0 0 0 0 .07 5.83 5.83 0 0 0 1.41 4.5A6.57 6.57 0 0 0 12 14.6a6.57 6.57 0 0 0 4.6-1.68 5.83 5.83 0 0 0 1.4-4.5Zm-5.26 4.64a.7.7 0 0 1-.5.2.74.74 0 0 1-.51-.2.75.75 0 0 1-.21-.51.72.72 0 0 1 .72-.71.72.72 0 0 1 .71.71.71.71 0 0 1-.19.51ZM14.8 1h-1.4V.25a.25.25 0 0 0-.25-.25h-2.3a.25.25 0 0 0-.25.25V1H9.2a.28.28 0 0 0-.27.18.29.29 0 0 0 .07.28l2.64 2.67a.51.51 0 0 0 .74 0L15 1.46a.29.29 0 0 0 .06-.33.28.28 0 0 0-.26-.13Z" />
    </Svg>
  )
}
export default SvgComponent
