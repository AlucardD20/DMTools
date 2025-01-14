// Cleric spells by level
const clericSpells = {
  1: ["Bless", "Command", "Create Water", "Cure Light Wounds", "Detect Evil", "Detect Magic", "Light", "Protection From Evil", "Purify Food & Drink", "Remove Fear", "Resist Cold", "Sanctuary"],
  2: ["Augury", "Chant", "Detect Charm", "Find Traps", "Hold Person", "Know Alignment", "Resist Fire", "Silence 15' Radius", "Slow Poison", "Snake Charm", "Speak With Animals", "Spiritual Hammer"],
  3: ["Animate Dead", "Continual Light", "Create Food & Water", "Cure Blindness", "Cure Disease", "Dispel Magic", "Feign Death", "Glyph Of Warding", "Locate Object", "Prayer", "Remove Curse", "Speak With Dead"],
  4: ["Cure Serious Wounds", "Detect Lie", "Divination", "Exorcise", "Lower Water", "Neutralize Poison", "Protection From Evil 10' Radius", "Speak With Plants", "Sticks To Snakes", "Tongues"],
  5: ["Atonement", "Commune", "Cure Critical Wounds", "Dispel Evil", "Flame Strike", "Insect Plague", "Plane Shift", "Quest", "Raise Dead", "True Seeing"],
  6: ["Aerial Servant", "Animate Object", "Blade Barrier", "Conjure Animals", "Find The Path", "Heal", "Part Water", "Speak With Monsters", "Stone Tell", "Word Of Recall"],
  7: ["Astral Spell", "Control Weather", "Earthquake", "Gate", "Holy (Unholy) Word", "Regenerate", "Restoration", "Resurrection", "Symbol", "Wind Walk"]
};

// Magic-User spells by level
const magicUserSpells = {
  1: ["Affect Normal Fires", "Burning Hands", "Charm Person", "Comprehend Languages", "Dancing Lights", "Detect Magic", "Enlarge", "Erase", "Feather Fall", "Find Familiar", "Friends", "Hold Portal", "Identify", "Jump", "Light", "Magic Missile", "Mending", "Message", "Nystul's Magic Aura", "Protection From Evil", "Push", "Read Magic", "Shield", "Shocking Grasp", "Sleep", "Spider Climb", "Tenser's Floating Disc", "Unseen Servant", "Ventriloquism", "Write"],
  2: ["Audible Glamer", "Continual Light", "Darkness 15' Radius", "Detect Evil", "Detect Invisibility", "ESP", "Fools Gold", "Forget", "Invisibility", "Knock", "Leomund's Trap", "Levitate", "Locate Object", "Magic Mouth", "Mirror Image", "Pyrotechnics", "Ray Of Enfeeblement", "Rope Trick", "Scare", "Shatter", "Stinking Cloud", "Strength", "Web", "Wizard Lock"],
  3: ["Blink", "Clairaudience", "Clairvoyance", "Dispel Magic", "Explosive Runes", "Feign Death", "Fireball", "Flame Arrow", "Fly", "Gust Of Wind", "Haste", "Hold Person", "Infravision", "Invisibility 10' Radius", "Leomund's Tiny Hut", "Lightning Bolt", "Monster Summoning I", "Phantasmal Force", "Protection From Evil 10' Radius", "Protection From Normal Missiles", "Slow", "Suggestion", "Tongues", "Water Breathing"],
  4: ["Charm Monster", "Confusion", "Dig", "Dimension Door", "Enchanted Weapon", "Extension I", "Fear", "Fire Charm", "Fire Shield", "Fire Trap", "Fumble", "Hallucinatory Terrain", "Ice Storm", "Massmorph", "Minor Globe Of Invulnerability", "Monster Summoning II", "Plant Growth", "Polymorph Other", "Polymorph Self", "Rary's Mnemonic Enhancer", "Remove Curse", "Wall Of Fire", "Wall Of Ice", "Wizard Eye"],
  5: ["Airy Water", "Animal Growth", "Animate Dead", "Bigby's Interposing Hand", "Cloudkill", "Conjure Elemental", "Cone Of Cold", "Contact Other Plane", "Distance Distortion", "Extension II", "Feeblemind", "Hold Monster", "Leomund's Secret Chest", "Magic Jar", "Monster Summoning III", "Mordenkainen's Faithful Hound", "Passwall", "Stone Shape", "Telekinesis", "Teleport", "Transmute Rock To Mud", "Wall Of Force", "Wall Of Iron", "Wall Of Stone"],
  6: ["Aerial Servant", "Animate Object", "Blade Barrier", "Conjure Animals", "Find The Path", "Heal", "Part Water", "Speak With Monsters", "Stone Tell", "Word Of Recall"],
  7: ["Astral Spell", "Control Weather", "Earthquake", "Gate", "Holy (Unholy) Word", "Regenerate", "Restoration", "Resurrection", "Symbol", "Wind Walk"]
};

// Random spell generator
function generateSpell() {
  const spellLevel = Math.floor(Math.random() * 7) + 1; // Random level (1-7)
  const spellClass = Math.random() < 0.5 ? "Cleric" : "Magic-User"; // Random class
  const spells = spellClass === "Cleric" ? clericSpells[spellLevel] : magicUserSpells[spellLevel];
  const spell = spells[Math.floor(Math.random() * spells.length)]; // Random spell
  document.getElementById("result").textContent = `Class: ${spellClass}, Level: ${spellLevel}, Spell: ${spell}`;
}
