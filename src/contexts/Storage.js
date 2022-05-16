import * as React from "react"
import useStorage from "../hooks/useStorage"

export const StorageContext = React.createContext()

const DEFAULT_IDENTITY = { gifts: [], lacks: [] }
const DEFAULT_STATISTICS = {}
const DEFAULT_SHAPE = { prime: 80, health: 80, power: 30, mana: 30, karma: 0 }
const DEFAULT_STORY = {}
const DEFAULT_PERSONNALITY = {}
const DEFAULT_EQUIPMENT = {}
const DEFAULT_INVENTORY = {}
const DEFAULT_TALENTS = {}
const DEFAULT_SKILLS = {}
const DEFAULT_GRIMOIRE = {}
const DEFAULT_NOTES = {}

const StorageContextProvider = ({ children }) => {
  const [identity, setIdentity] = useStorage("identity", DEFAULT_IDENTITY)
  const [statistics, setStatistics] = useStorage("statistic", DEFAULT_STATISTICS)
  const [shape, setShape] = useStorage("shape", DEFAULT_SHAPE)
  const [story, setStory] = useStorage("story", DEFAULT_STORY)
  const [personnality, setPersonnality] = useStorage("personnality", DEFAULT_PERSONNALITY)
  const [equipment, setEquipment] = useStorage("equipment", DEFAULT_EQUIPMENT)
  const [inventory, setInventory] = useStorage("inventory", DEFAULT_INVENTORY)
  const [talents, setTalents] = useStorage("talents", DEFAULT_TALENTS)
  const [skills, setSkills] = useStorage("skills", DEFAULT_SKILLS)
  const [grimoire, setGrimoire] = useStorage("grimoire", DEFAULT_GRIMOIRE)
  const [notes, setNotes] = useStorage("notes", DEFAULT_NOTES)

  const clearCaches = () => {
    setIdentity(DEFAULT_IDENTITY)
    setStatistics(DEFAULT_STATISTICS)
    setShape(DEFAULT_SHAPE)
    setStory(DEFAULT_STORY)
    setPersonnality(DEFAULT_PERSONNALITY)
    setEquipment(DEFAULT_EQUIPMENT)
    setInventory(DEFAULT_INVENTORY)
    setTalents(DEFAULT_TALENTS)
    setSkills(DEFAULT_SKILLS)
    setGrimoire(DEFAULT_GRIMOIRE)
    setNotes(DEFAULT_NOTES)
  }

  return (
    <StorageContext.Provider
      value={{
        identity,
        statistics,
        shape,
        story,
        personnality,
        equipment,
        inventory,
        talents,
        skills,
        grimoire,
        notes,
        setIdentity,
        setStatistics,
        setShape,
        setStory,
        setPersonnality,
        setEquipment,
        setInventory,
        setTalents,
        setSkills,
        setGrimoire,
        setNotes,
        clearCaches
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export default StorageContextProvider
