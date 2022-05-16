import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import i18n from "../../i18n"

import Identity from "../Identity"
import Statistics from "../Statistics"
import Competences from "../Competences"
import Inventory from "../Inventory"
import Notes from "../Notes"

import * as Icons from "./Icons"
import Tabs from "./Tabs"

const Tab = createBottomTabNavigator()

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <Tabs {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        lazy: true,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Identity"
        component={Identity}
        options={{ title: i18n.t("navigation.identity"), icon: Icons.Identity }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{ title: i18n.t("navigation.statistics"), icon: Icons.Statistics }}
      />
      <Tab.Screen
        name="Competences"
        component={Competences}
        options={{ title: i18n.t("navigation.competences"), icon: Icons.Competences }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{ title: i18n.t("navigation.inventory"), icon: Icons.Inventory }}
      />
      <Tab.Screen name="Notes" component={Notes} options={{ title: i18n.t("navigation.notes"), icon: Icons.Notes }} />
    </Tab.Navigator>
  )
}

export default TabScreen
