import * as React from "react"
import { Animated, Modal as NativeModal } from "react-native"

import Backdrop from "./Backdrop"
import Backspace from "./Backspace"
import Content from "./Content"

const ANIMATION = { duration: 160, useNativeDriver: true }
const ENTER_ANIMATION = { ...ANIMATION, toValue: 0.25 }
const EXIT_ANIMATION = { ...ANIMATION, toValue: 0 }
const MODAL_SETTINGS = { transparent: true, visible: true, hardwareAccelerated: true }

const Modal = ({ title, content, defaultContent, setContent, onClose }) => {
  const fade = React.useRef(new Animated.Value(0)).current
  const visible = content || title

  const closeAction = () => {
    onClose?.()
    setContent(defaultContent)
  }

  const closeModal = () => startExitAnimation(closeAction)

  const startEnterAnimation = React.useCallback(() => {
    Animated.timing(fade, ENTER_ANIMATION).start()
  }, [fade])

  const startExitAnimation = (callback) => {
    Animated.timing(fade, EXIT_ANIMATION).start(callback)
  }

  React.useEffect(() => {
    visible && startEnterAnimation()
  }, [startEnterAnimation, visible])

  if (!visible) return null

  return (
    <>
      <Backdrop fade={{ opacity: fade }} close={closeModal} />
      <NativeModal {...MODAL_SETTINGS} animationType="slide" onRequestClose={closeModal}>
        <Backspace />
        <Content title={title} content={content} close={closeModal} />
      </NativeModal>
    </>
  )
}

export default Modal
