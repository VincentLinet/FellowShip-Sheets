import * as React from "react"
import Cancelation from "./Cancelation"
import Validation from "./Validation"

const getKind = (kind) => {
  switch (kind) {
    case "validation":
    case "validate":
    case "save":
      return Validation
    case "cancelation":
    case "cancel":
      return Cancelation
    default:
      return Validation
  }
}

const Button = ({ kind, style, action, onPress }) => {
  const Kind = getKind(kind)

  return <Kind style={style} action={action} onPress={onPress} />
}
export default Button
