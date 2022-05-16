import * as React from "react"
import { StyleSheet, TextInput, View } from "react-native"

const Title = () => {
  const [name, setName] = React.useState()
  const [being, setBeing] = React.useState()

  return (
    <View style={styles.root}>
      <TextInput style={styles.name} placeholder={"Nom"} autoCorrect={false} value={name} onChange={setName} />
      <TextInput
        style={styles.character}
        placeholder={"Raison"}
        autoCorrect={false}
        value={being}
        onChange={setBeing}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    height: 60
  },
  name: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    letterSpacing: 2
  },
  character: {
    fontSize: 20,
    paddingVertical: 5
  }
})

export default Title
