import * as React from "react"
import { StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { StorageContext } from "../../contexts/Storage"
import BidirectionalStatus from "./BidirectionalStatus"
import Status from "./Status"
import Title from "./Title"
import Theme from "../../constants/Theme"
import Health from "../../assets/icons/health"
import Mana from "../../assets/icons/mana"
import Karma from "../../assets/icons/karma"
import Separator from "../common/Separator"

const BAR_SIZE = 210

const Player = () => {
  const { shape, ...Storage } = React.useContext(StorageContext)
  const { health, mana, power, prime, karma } = shape
  const insets = useSafeAreaInsets()

  const updateHealth = (health) => Storage.setShape({ ...shape, health })
  const updateMana = (mana) => Storage.setShape({ ...shape, mana })
  const updateKarma = (karma) => Storage.setShape({ ...shape, karma })

  return (
    <View style={styles.root(insets)}>
      <View style={styles.content}>
        <Title />
        <Status Icon={Health} value={health} color={Theme.red} maximum={prime} onSlidingComplete={updateHealth} />
        <Status Icon={Mana} value={mana} color={Theme.darkblue} maximum={power} onSlidingComplete={updateMana} />
        <BidirectionalStatus
          Icon={Karma}
          value={karma}
          color={Theme.green}
          secondary={Theme.purple}
          maximum={180}
          minimum={-180}
          format={Math.abs}
          onSlidingComplete={updateKarma}
        />
      </View>
      <Separator />
    </View>
  )
}

const styles = StyleSheet.create({
  root: (insets) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: BAR_SIZE + insets.top,
    paddingLeft: 20 + insets.left,
    paddingRight: 20 + insets.right,
    paddingTop: 15 + insets.top
  }),
  separator: {
    height: 1
  }
})

export default Player
