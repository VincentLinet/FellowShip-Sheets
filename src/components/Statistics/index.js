import * as React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import Theme from "../../constants/Theme"
import Field from "../common/Field"
import Table from "../common/Table"

import Statistic from "../../constants/Statistics"
import * as Icons from "./Icons"
import Roll from "./Roll"

const buildHeader = (...headers) => headers.map((key) => ({ Icon: Icons[key], key }))

const Statistics = () => {
  const [roll, setRoll] = React.useState({})
  const insets = useSafeAreaInsets()

  const rolls = Statistic.map((statistic) => [
    () => <Roll onClick={() => setRoll({ current: statistic, value: Math.ceil(Math.random() * 100) })} />,
    { text: roll.current === statistic ? roll.value : "", disabled: true }
  ])
  const header = buildHeader("Folk", "Birth", "Vocation", "Modifier", "Total")
  const legend = [
    { text: "FOR", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "ADR", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "CON", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "INT", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "SAG", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "CHA", style: { flex: 1, alignItems: "flex-start" }, disabled: true }
  ]
  const data = [
    ["", ...header, "", ""],
    [legend[0], 40, 50, 0, 5, 95, ...rolls[0]],
    [legend[1], 35, 40, 0, 0, 75, ...rolls[1]],
    [legend[2], 35, 35, 0, 0, 70, ...rolls[2]],
    [legend[3], 25, 20, 0, 0, 45, ...rolls[3]],
    [legend[4], 20, 30, 0, 0, 50, ...rolls[4]],
    [legend[5], 30, 30, 0, 0, 60, ...rolls[5]]
  ]
  const rolls2 = ["attack", "dodge", "parry"].map((statistic) => [
    () => <Roll onClick={() => setRoll({ current: statistic, value: Math.ceil(Math.random() * 100) })} />,
    { text: roll.current === statistic ? roll.value : "", disabled: true }
  ])
  const legend2 = [
    { text: "Attaque", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "Esquive", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "Blocage", style: { flex: 1, alignItems: "flex-start" }, disabled: true }
  ]
  const data2 = [
    [legend2[0], 0, 75, ...rolls2[0]],
    [legend2[1], 0, 75, ...rolls2[1]],
    [legend2[2], 0, 70, ...rolls2[2]]
  ]
  const rolls3 = ["fistfight", "authority", "stonecutting"].map((statistic) => [
    () => <Roll onClick={() => setRoll({ current: statistic, value: Math.ceil(Math.random() * 100) })} />,
    { text: roll.current === statistic ? roll.value : "", disabled: true }
  ])
  const legend3 = [
    { text: "Pugilat", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "Autorité", style: { flex: 1, alignItems: "flex-start" }, disabled: true },
    { text: "Taille de Pierre", style: { flex: 1, alignItems: "flex-start" }, disabled: true }
  ]
  const data3 = [
    [legend3[0], 20, 90, ...rolls3[0]],
    [legend3[1], 10, 105, ...rolls3[1]],
    [legend3[2], 10, 105, ...rolls3[2]]
  ]

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Field title="Statistiques">
        <View style={styles.statistics(insets)}>
          <Table style={styles.table} data={data} header={header} legend={legend} />
        </View>
      </Field>
      <Field title="Combat">
        <View style={styles.statistics(insets)}>
          <Table style={styles.table} data={data2} legend={legend2} />
        </View>
      </Field>
      <Field title="Compétences">
        <View style={styles.statistics(insets)}>
          <Table style={styles.table} data={data3} legend={legend3} />
        </View>
      </Field>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: { paddingBottom: 24 },
  statistics: (insets) => ({
    paddingLeft: 10 + insets.left,
    paddingRight: 10 + insets.right
  }),
  table: {
    borderRadius: Theme.radius,
    backgroundColor: Theme.white,
    paddingVertical: 6
  }
})

export default Statistics
