import * as React from "react"
import { Text, TextInput } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import AppLoading from "expo-app-loading"
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { RobotoMono_400Regular, RobotoMono_700Bold } from "@expo-google-fonts/roboto-mono"
import StorageContextProvider from "./src/contexts/Storage"
import ModalContextProvider from "./src/contexts/Modal"
import Core from "./src/components/Core"

export default function App() {
  Text.defaultProps = Text.defaultProps || {}
  Text.defaultProps.maxFontSizeMultiplier = 1.3
  TextInput.defaultProps.maxFontSizeMultiplier = 1.3
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
    RobotoMono_400Regular,
    RobotoMono_700Bold
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <StorageContextProvider>
      <SafeAreaProvider>
        <ModalContextProvider>
          <StatusBar style="dark" />
          <NavigationContainer>
            <Core />
          </NavigationContainer>
        </ModalContextProvider>
      </SafeAreaProvider>
    </StorageContextProvider>
  )
}
