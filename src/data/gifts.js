const GIFTS = [
  {
    value: "confined",
    label: "Borné",
    effects: [
      { target: "wisdom", add: 5 },
      { target: "skill", skill: "Résistance à la Provocation" }
    ]
  },
  { value: "gifted", label: "Avantagé", effects: [{ target: "gift", add: 1 }] },
  { value: "famous", label: "Célèbre", unlimited: true, effects: [{ target: "skill", skill: "Célèbre" }] },
  { value: "network", label: "Contacts", unlimited: true, effects: [{ target: "skill", skill: "Contacts" }] },
  { value: "lucky", label: "Chanceux", cost: 2, effects: [{ target: "skill", skill: "Chanceux" }] },
  { value: "trained", label: "Entraîné", effects: [{ target: "skills", add: 2 }] },
  {
    value: "scholar",
    label: "Érudit",
    effects: [
      { target: "skill", skill: "Érudit" },
      { target: "intelligence", add: 5 }
    ]
  },
  {
    value: "genius",
    label: "Génie",
    effects: [
      { target: "intelligence", add: 5 },
      { target: "engineering", add: 10 }
    ]
  },
  { value: "healing", label: "Guérison Rapide", effects: [{ target: "skill", skill: "Guérison Rapide" }] },
  {
    value: "heir",
    label: "Héritier",
    cost: 2,
    effects: [{ target: "gear", skill: "Équipement d'Héritage", add: 1 }]
  },
  { value: "clocker", label: "Soliculiste", cost: 2, effects: [{ target: "skill", skill: "Soliculiste", add: 1 }] },
  {
    value: "unwavering",
    label: "Inflexible",
    effects: [
      { target: "wisdom", add: 5 },
      { target: "skill", skill: "Résistance aux Effets de l'Âme" }
    ]
  },
  { value: "mageborn", label: "Mage Né", cost: 2, effects: [{ target: "mana", add: 10 }] },
  { value: "nyctalope", label: "Nyctalope", effects: [{ target: "skill", skill: "Nyctalope" }] },
  { value: "hardskin", label: "Peau Renforcée", effects: [{ target: "skill", skill: "Peau Renforcée" }] },
  { value: "hunch", label: "Pressentiment", effects: [{ target: "skill", skill: "Pressentiment" }] },
  { value: "impulse", label: "Réflexes Vifs", effects: [{ target: "skill", skill: "Réflexes Vifs" }] },
  { value: "quick", label: "Rapide", effects: [{ target: "quickness", add: 3 }] },
  { value: "rich", label: "Riche", effects: [{ target: "skill", skill: "Riche" }] },
  { value: "seducer", label: "Séducteur", effects: [{ target: "skill", skill: "Séducteur" }] },
  { value: "sympathic", label: "Sympathique", effects: [{ target: "skill", skill: "Sympathique" }] },
  {
    value: "tenacious",
    label: "Tenace",
    effects: [
      { target: "health", add: 5 },
      { target: "skill", skill: "Tenace" }
    ]
  },
  { value: "magicless", label: "Trou Magique", cost: 2, effects: [{ target: "skill", skill: "Trou Magique" }] },
  {
    value: "melodic",
    label: "Voix Mélodieuse",
    effects: [
      { target: "skill", skill: "Voix Mélodieuse" },
      { target: "charisma", add: 5 },
      { target: "singing", add: 10 }
    ]
  }
]

export default GIFTS
