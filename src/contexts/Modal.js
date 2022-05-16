import * as React from "react"
import Modal from "../components/common/Modal"

export const ModalContext = React.createContext()

const ModalContextProvider = ({ children }) => {
  const [content, setContent] = React.useState({})

  return (
    <ModalContext.Provider value={{ content, setContent }}>
      {children}
      <Modal setContent={setContent} defaultContent={{}} {...content} />
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
