// Likelihood Table - corresponds to the percentages as described in the image
const likelihoodTable = [
    { name: "Impossible", percentage: 10 },
    { name: "No way", percentage: 20 },
    { name: "Very Unlikely", percentage: 30 },
    { name: "Unlikely", percentage: 40 },
    { name: "50/50 Chance", percentage: 50 },
    { name: "Likely", percentage: 60 },
    { name: "Very Likely", percentage: 70 },
    { name: "Near sure thing", percentage: 80 },
    { name: "A sure thing", percentage: 90 }
];

// Event Focus Table - determines the event focus based on a roll
const eventFocusChart = [
    { range: [1, 7], focus: "Remote Event" },
    { range: [8, 28], focus: "Non-Player Character Action" },
    { range: [29, 35], focus: "Introduce a new Non-Player Character" },
    { range: [36, 45], focus: "Move Toward a Goal" },
    { range: [46, 52], focus: "Move Away from a Goal" },
    { range: [53, 55], focus: "Yes or No, but…" },
    { range: [56, 67], focus: "Player Negative" },
    { range: [68, 75], focus: "Player Positive" },
    { range: [76, 83], focus: "Ambiguous Event" },
    { range: [84, 92], focus: "Non-Player Character Negative" },
    { range: [93, 100], focus: "Non-Player Character Positive" }
];

// Action Chart - related to actions in the event
const actionChart = [
    "Whisper", "Dream", "Unveil", "Sacrifice", "Write", "Hunt", "Confront", "Reveal", "Summon", "Hide",
    "Scream", "Explode", "Unmask", "Clash", "Awaken", "Shatter", "Sow", "Awaken", "Craft", "Prophesy",
    "Laugh", "Call", "Ritualize", "Envelop", "Desecrate", "Torment", "Incite", "Invoke", "Break", "Crawl",
    "Lurk", "Cry", "Stare", "Watch", "Imprint", "Remember", "Gaze", "Contemplate", "Absorb", "Evoke",
    "Escape", "Unchain", "Sustain", "Observe", "Follow", "Summon", "Attack", "Clutch", "Pursue", "Invoke",
    "Engulf", "Seek", "Search", "Weep", "Rejoice", "Fear", "Infect", "Transcend", "Observe", "Devour",
    "Call", "Shake", "Manifest", "Haunt", "Absorb", "Erode", "Twist", "Hide", "Delve", "Crumble",
    "Contort", "Lash", "Banish", "Shatter", "Tear", "Whirl", "Bind", "Examine", "Mourn", "Strike",
    "Ascend", "Escape", "Thrust", "Entrap", "Devastate", "Fracture", "Beg", "Shackle", "Breathe", "Scrape",
    "Rip", "Transmute", "Reclaim", "Hurl", "Whip", "Circle", "Strike", "Shroud", "Grip", "Strike",
    "Suffer", "Delirium", "Scream", "Enslave", "Conjure", "Phase", "Warp", "Sing", "Rage", "Twist",
    "Glimpse", "Betray", "Scour", "Roar", "Thrive", "Intimidate", "Empower", "Dismantle", "Tear apart", "Collapse"
];

const subjectChart = [
    "Eldritch Horror", "Forbidden Knowledge", "Madness", "Cosmic Entities", "The Unknown", "Ancient Gods", "The Void", "Chaos",
    "A Horrific Dream", "Whispers", "Time Distortion", "A Disrupted Reality", "The Dark Cult", "Mind Invasion", "Corruption", "Nightmare",
    "Night Sky", "Hidden Secrets", "Ancient Ruins", "A Haunting", "The Undead", "Malevolent Forces", "The Past", "The Future", "The Abyss",
    "Lost Civilization", "Inescapable Fate", "Cosmic Lies", "Void Entities", "Shadow People", "The Occult", "Dark Magic", "Dark Rituals",
    "Blood", "Curses", "The Unknown Entity", "Space", "Nightmares", "Alien Visions", "Occult Sciences", "Death", "Unseen Beings", "Forbidden Rituals",
    "Unknowable Horrors", "Resurrection", "Forgotten Knowledge", "The Elders", "Unsolved Mystery", "The End Times", "Apocalypse", "Strange Portals",
    "Abandoned Places", "Haunting Vision", "The Deep", "Cosmic Knowledge", "Divine Intervention", "Otherworldly Forces", "Ritualistic Powers",
    "Blood Moon", "Dark Shadow", "Cults", "Mental Breakdown", "Powerful Talisman", "Enigmatic Symbols", "Forgotten Texts", "False Prophecies",
    "The Desolate Land", "Sudden Revelations", "The Unseen", "Reality Shattered", "The Beginning of Madness", "Mind Alchemy", "Cosmic Awakening",
    "Truth Beyond Reach", "Self Destruction", "Final Revelation", "Shattered Minds", "Powerful Artifacts", "Eternal Suffering", "Voids Beyond",
    "Unholy Union", "Endless Fall", "Decay", "Time Wounds", "Fallen Gods", "Horrific Experiments", "Illusions", "Eternal Night", "Cosmic Beasts",
    "Celestial Knowledge", "Time Loops", "The Infinite Void", "Absurd Reality", "Fractured Time", "A Second Chance", "Terrifying Truths", "Time Collapse",
    "Dream Realms", "Dark Energies", "The Altered State", "Falling Stars", "Underworlds"
];

// Old Book List
const bookList = [
    "Whispers of the Abyss", 
    "The Eldritch Codex", 
    "Terrors from the Deep", 
    "Chants of the Unspeakable", 
    "The Nameless Grimoire", 
    "Shadows Beyond Time", 
    "The Forgotten Scrolls", 
    "Echoes of the Infinite", 
    "The Blasphemous Manuscript", 
    "Invocation of the Old Ones", 
    "The Cursed Library", 
    "Secrets of the Crawling Chaos", 
    "The Dread Compendium", 
    "Rituals of the Darkened Moon", 
    "The Unseen Texts", 
    "Chronicles of the Elders", 
    "The Shattered Sigils", 
    "Veils of the Forgotten", 
    "The Cryptic Omnibus", 
    "Psalms of the Unknowable", 
    "The Abominable Archive", 
    "Scribbles from the Void", 
    "The Lost Grimoire of Yuggoth", 
    "The Grasp of the Shoggoth", 
    "The Haunting Codex", 
    "Writings from Beyond the Stars", 
    "The Forbidden Lore", 
    "The Ebon Book of Secrets", 
    "The Lurker's Compendium", 
    "Mysteries of the Outer Realms", 
    "The Unholy Anthology", 
    "The Altar of the Great Old Ones", 
    "The Eerie Chronicles", 
    "The Baneful Text", 
    "The Shroud of the Abyssal", 
    "The Whispering Pages", 
    "The Eldritch Archives", 
    "The Dreaded Tome", 
    "The Dark Grimoire of R'lyeh", 
    "The Celestial Convergence", 
    "The Malignant Codex", 
    "The Terrors of Nyarlathotep", 
    "The Forbidden Rites", 
    "The Unfathomable Ledger", 
    "The Crypt of the Forgotten", 
    "The Veil of Shadows", 
    "The Desolate Chronicles", 
    "The Grimoire of Shadows", 
    "Essence of the Abyss", 
    "The Wailing Manuscript", 
    "The Eldritch Compendium", 
    "The Arcane Texts of the Nameless", 
    "The Sorrowful Grimoire", 
    "The Timeless Grasp", 
    "The Secrets of the Deep Ones", 
    "The Book of Unearthly Horrors", 
    "The Arcane Altar", 
    "The Forgotten Texts", 
    "The Eldritch Incantation", 
    "The Forsaken Library", 
    "The Grasp of the Unknown", 
    "The Cacophony of Madness", 
    "The Keeper's Tome", 
    "The Dreamer's Codex", 
    "The Cyclopean Grimoire", 
    "Abyssal Whispers", 
    "The Lost Lore of the Ancients", 
    "The Tome of Infinite Night", 
    "The Dread Codex of the Abyss", 
    "The Wretched Manuscript", 
    "Chronicles of the Abyss", 
    "The Unholy Grimoire", 
    "The Accursed Tome", 
    "The Whispering Grimoire", 
    "Legends of the Unspeakable", 
    "The Veil of the Great Old Ones", 
    "The Abyssal Text", 
    "The Tome of Shadows", 
    "The Gatherings of the Forgotten", 
    "The Eldritch Rituals", 
    "The Sinister Codex", 
    "The Horrors of the Beyond", 
    "The Book of Dread", 
    "The Forgotten Rites", 
    "The Abyssal Archive", 
    "The Shattered Codex", 
    "The Dreadful Manuscript", 
    "The Lamentations of the Old Ones", 
    "The Secrets of the Abyss", 
    "The Grimoire of the Lost Ones", 
    "The Cursed Text", 
    "The Writings of the Elders", 
    "The Knowledge of the Forgotten", 
    "The Sinister Archives", 
    "The Terrors of the Unknown", 
    "The Dark Omnibus", 
    "The Eldritch Text", 
    "The Haunting Grimoire", 
    "The Arcane Rites", 
    "The Forbidden Archive", 
    "The Lost Codex", 
    "The Tome of Despair"
];

// Languages for the books
const languages = [
    "Latin", "Ancient Greek", "Hebrew", "English", "Aramaic", "Sumerian", "Old Norse", "Arabic", "German", "Duriac"
];

// Descriptions for the books
const bookDescriptions = [
    "A comprehensive guide to ancient alchemical practices and their relation to happiness.",
    "A mysterious text full of arcane symbols that promises to unlock hidden truths about the cosmos.",
    "A lost grimoire said to be written by Solomon himself, containing forbidden rituals.",
    "An obscure treatise on the reintegration of beings, mixing philosophy and mysticism.",
    "A dense work exploring the fundamental aspects of life, from the philosophical to the metaphysical.",
    "An ancient papyrus believed to be a collection of magical spells from the Greek world.",
    "A manual for Grand Jury men, outlining the judicial duties in ancient times with esoteric twists.",
    "A rare text filled with the confounding secrets of spirit summoning.",
    "A notorious book said to be the work of the devil himself, filled with cryptic lies.",
    "A mystical guide to the philosophical and alchemical practices of ancient Rosicrucians."
    // Add descriptions for each book here.
];

// Function to randomly pick a book, language, and description
function pickBook() {
    // Randomly pick a book, a language, and a description
    let randomBookIndex = Math.floor(Math.random() * bookList.length);
    let randomLanguageIndex = Math.floor(Math.random() * languages.length);
    let randomDescriptionIndex = Math.floor(Math.random() * bookDescriptions.length);

    let book = bookList[randomBookIndex];
    let language = languages[randomLanguageIndex];
    let description = bookDescriptions[randomDescriptionIndex];

    // Concatenate all results into one string
    let resultText = `
        The selected Tome is: "${book}"<br>
        Written in: ${language}<br>
        Description: ${description}
    `;

    // Display the concatenated result in a single box
    addResult(resultText);
}


// Function to add results to the result container
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}



// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}



// Function to roll for event based on likelihood and event focus
function rollEvent() {
    let targetPercentage = parseInt(document.getElementById('likelihood').value);
    let roll = Math.floor(Math.random() * 100) + 1; // Roll a 1d100
    let resultText = `You rolled a ${roll}.`;

    // Check if the event occurs based on the likelihood (Yes/No)
    if (roll <= targetPercentage) {
        resultText += " Yes"; // Normal Yes
    } else {
        resultText += " No."; // Normal No
    }

    // Check if the roll is a double (e.g., 11, 22, 33, etc.) - Always triggers Event Focus
    if (roll % 11 === 0) {
        // Double rolled, trigger event focus, action, and subject
        let eventFocusRoll = Math.floor(Math.random() * 100) + 1; // Roll a second 1d100 for event focus
        let eventFocus = getEventFocus(eventFocusRoll);
        resultText += `<br>Event Focus: ${eventFocus}`;

        // Roll for action and subject
        let actionText = actionChart[Math.floor(Math.random() * actionChart.length)];
        let subjectText = subjectChart[Math.floor(Math.random() * subjectChart.length)];
        resultText += `<br>Action: ${actionText}<br>Subject: ${subjectText}`;
    }

    addResult(resultText);
}

// Function to get the event focus based on the roll
function getEventFocus(roll) {
    for (let focus of eventFocusChart) {
        if (roll >= focus.range[0] && roll <= focus.range[1]) {
            return focus.focus;
        }
    }
}
// Array of Town Names
const townNames = [
    "Arkham Hollow", "Blackstone Harbor", "Dunwich Cove", "Kingsport Heights", "Innsmouth Falls",
    "Ravenridge", "Ashenford", "Brimstone Bay", "Elder's Hollow", "Greyhaven", "Widdershade",
    "Shadowmere", "Carrowmill", "Lament Point", "Harrowfield", "Mourning Hollow", "Blackmoor",
    "Gravenstead", "Duskmire", "Oakhaven", "Bleakwater", "Rookwood", "Craven Hollow", "Eldergate",
    "Mistcliff", "Red Hollow", "Charnelwood", "Barrowdown", "Thornhaven", "Twilight Reach", "Pinecroft",
    "Deepmere", "Darkvale", "Fogreach", "Seaburrow", "Starry Vale", "Blackroot", "Ashpoint", "Driftmarsh",
    "Gloomshade", "Stormhearth", "Lowwater", "Nightbloom", "Grimshore", "Ebonridge", "Ruinport",
    "Crowcross", "Vesper's Hollow", "Shadowglen", "Grimlight", "Windmere", "Deadwood", "Stonewharf",
    "Hollow Bay", "Gravemoor", "Saltspire", "Netherport", "Shalehaven", "Bitterreach", "Frostvale",
    "Eldermoor", "Havenlock", "Murkwater", "Harpsfall", "Whispering Pines", "Silent Hollow", "Coldmarsh",
    "Bleakridge", "Wormwood", "Ravenmere", "Everdark", "Cursed Hollow", "Cinderbank", "Harrowmoor",
    "Ashwood", "Omenfall", "Severance Bay", "Midnight Hollow", "Moonshadow", "Deepfog", "Glumhaven",
    "Ebonreach", "Rimewatch", "Mournebay", "Shadeport", "Old Lantern", "Seapoint Hollow", "Blackmarsh",
    "Lovecroft", "Lone Pine", "Stonemill", "Twilight Cove", "Ravensward", "Ironcliff", "Dreadwater",
    "Hollow Hearth", "Havenreach", "Witchlight", "Elder's Wake", "Chillmere"
];

// Function to randomly pick a town from the list
function pickTown() {
    let randomIndex = Math.floor(Math.random() * townNames.length);
    let town = townNames[randomIndex];

    // Display the selected town
    addResult(`The selected town is: "${town}"`);
}
// Array of Plot Hooks
const plotHooks = [
    "A strange book appears on the party’s doorstep, containing passages that change every time it’s read",
    "A long-abandoned lighthouse suddenly lights up again, despite being in ruins",
    "The waters of a local well turn black and viscous, causing illness among villagers",
    "An ancient tree uproots itself and begins slowly moving toward the town",
    "A coastal town’s fishermen report catching deep-sea creatures that seem to whisper secrets",
    "A family’s ancestral home becomes a hub for strange lights and sounds at night",
    "A derelict ship washes ashore, its crew missing, but the cargo intact",
    "The moon appears slightly larger and closer every night, unnerving the locals",
    "A local eccentric claims the constellations have shifted and predicts disaster",
    "A reclusive artist goes missing, leaving behind unsettling, half-finished paintings",
    "An old mine collapses, revealing an unearthly structure beneath the earth",
    "The party receives a letter from a deceased relative, pleading for help",
    "The town’s children begin humming the same eerie tune, though no one knows its origin",
    "The local graveyard is overrun with strange, phosphorescent fungi",
    "A carnival arrives in town, but its performers refuse to speak to anyone after dark",
    "An old map is found, marking an unknown island in familiar waters",
    "The church bell tolls by itself at irregular intervals, even when removed from the tower",
    "A dense fog rolls into the area, and those who enter often vanish",
    "A reclusive scholar hires the party to retrieve a relic from an infamous ruin",
    "The townsfolk begin carving identical symbols into their homes and refuse to explain why",
    "A string of disappearances coincides with the arrival of a comet in the night sky",
    "A traveling merchant offers a strange artifact, claiming it wards off nightmares",
    "A local pond freezes solid in midsummer, trapping something beneath the ice",
    "The sound of footsteps echoes in empty buildings, but no one is ever found",
    "A meteorite lands nearby, but those who approach it begin to act erratically",
    "A cryptic message is scrawled across every building in town overnight",
    "The river’s flow reverses for several hours, revealing an ancient stone monolith",
    "A rare flower blooms in the woods, and those who pick it begin having vivid dreams",
    "A neighbor goes missing, leaving their diary filled with entries written in an unknown language",
    "The town’s livestock begin turning up mutilated, their blood forming strange patterns",
    "A stranger arrives in town, seeking aid to retrieve an item they claim is cursed",
    "A derelict train arrives at the station, filled with luggage but no passengers",
    "The stars vanish from the night sky, replaced by swirling, faintly glowing shapes",
    "A storm rolls in, but the thunder sounds more like voices than natural rumbling",
    "An ancient family heirloom begins to glow faintly, growing brighter every night",
    "A local historian vanishes after announcing they’ve uncovered proof of a forgotten civilization",
    "The sound of distant chanting can be heard from the hills, growing louder every evening",
    "A new house appears on the outskirts of town, though no one remembers it being built",
    "The local cats gather nightly in the town square, meowing in unison",
    "A strange illness spreads, causing vivid hallucinations of alien landscapes",
    "A festival long thought abandoned is suddenly revived by unknown organizers",
    "The shadow of an abandoned factory moves as if something inside is alive",
    "The town’s well dries up, revealing an ancient staircase descending into darkness",
    "An artifact from a museum exhibit goes missing, with no sign of forced entry",
    "A ship is spotted off the coast, seemingly stuck in place despite strong winds",
    "The sound of a crying child is heard nightly in the woods, though no one can find the source",
    "A constellation thought lost to history appears in the night sky, puzzling astronomers",
    "A string of strange symbols is found etched into the town’s oldest trees",
    "A wandering priest warns of a great flood, though the weather is dry and clear",
    "A mirror in a local inn begins showing strange, impossible reflections",
    "A cave-in reveals a network of tunnels filled with ancient carvings",
    "The town’s dogs howl incessantly at a specific time every night",
    "A newspaper arrives in town, predicting events that happen hours later",
    "A traveling apothecary offers potions that cause vivid, shared dreams",
    "A harvest festival is interrupted by unexplainable celestial phenomena",
    "The foghorn at the harbor sounds at odd intervals, even on clear nights",
    "An old violin is discovered in a pawnshop, and those who play it report hearing whispers",
    "The party receives a cryptic map that changes depending on the direction they’re facing",
    "A previously dry well begins overflowing with seawater, despite being miles inland",
    "A wandering minstrel arrives with a song that entrances anyone who hears it",
    "A merchant offers rare artifacts at impossibly low prices, but all vanish after purchase",
    "A hermit returns to town claiming to have spoken with an ancient entity",
    "The scent of sulfur permeates the air, though no one can find its source",
    "The lighthouse beam points inland for several nights, lighting up an old manor",
    "A young child claims they have been speaking with someone in their dreams, offering warnings",
    "The ruins of a lost town appear after a flood recedes, seemingly untouched by time",
    "The same face begins appearing in every portrait painted in the town",
    "The wind carries the sound of faint, discordant music, even on still nights",
    "The local clock tower begins counting backward, and the townsfolk grow uneasy",
    "A small, ancient chapel appears where none existed before, filled with unholy relics",
    "The town crier begins shouting incoherent warnings about “the rising tides”",
    "A strange obelisk is discovered in the woods, humming faintly at dusk",
    "The soil of the town’s farmland becomes jet black, yielding enormous but tasteless crops",
    "A missing caravan returns with its passengers unaware they were ever gone",
    "The party finds a sealed letter addressed to them, though they’ve never met the sender",
    "The sky turns an unnatural color, and the stars begin to shift",
    "The local doctor vanishes, leaving behind cryptic notes about a “patient beyond time”",
    "An old bell tower rings despite having no bell or mechanism inside",
    "A fisherman reports catching fish with glowing eyes and faint human-like features",
    "A local bridge collapses, revealing a hidden chamber beneath the riverbed",
    "The town’s birds vanish, leaving nests filled with black, egg-like stones",
    "A series of tremors reveals a vast, buried statue of an unknown deity",
    "The town’s oldest tree begins secreting a black, tar-like substance",
    "A previously harmless local legend begins to mirror real-world events",
    "The sound of flapping wings echoes in the night, though no birds are visible"
];


// Function to randomly pick a plot hook
function generatePlot() {
    let randomIndex = Math.floor(Math.random() * plotHooks.length);
    let plot = plotHooks[randomIndex];

    // Display the selected plot hook
    addResult(`Plot Hook: "${plot}"`);
}

// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// Event listener for the "Generate Plot Hook" button
document.getElementById('generatePlotBtn').addEventListener('click', generatePlot);

// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// Event listener for the new "Pick a Town" button
document.getElementById('pickTownBtn').addEventListener('click', pickTown);
// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}
// List of popular names from the 1920s
const maleNames = [
    "James", "John", "Robert", "Michael", "William", "David", "Joseph", "Charles", "Thomas", "Daniel",
    "Paul", "Mark", "Donald", "George", "Edward", "Kenneth", "Steven", "Howard", "Richard", "Frank"
];

const femaleNames = [
    "Mary", "Helen", "Dorothy", "Betty", "Margaret", "Ruth", "Virginia", "Frances", "Elizabeth", "Mildred",
    "Edith", "Lillian", "Alice", "Gladys", "Rose", "Eleanor", "Anne", "Harriet", "Marie", "Louise"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
    "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "White", "Lee"
];

// Function to generate a random name
function generateRandomPerson() {
    const gender = Math.random() < 0.5 ? 'male' : 'female';  // Randomly pick gender

    let firstName, lastName;
    if (gender === 'male') {
        firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
    } else {
        firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    }

    lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const fullName = `${firstName} ${lastName}`;
    addResult(`Generated Person: ${fullName}`);
}

// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// Event listener for the new "Generate Random Person" button
document.getElementById('generatePersonBtn').addEventListener('click', generateRandomPerson);


// Function to get the event focus based on the roll
function getEventFocus(roll) {
    for (let focus of eventFocusChart) {
        if (roll >= focus.range[0] && roll <= focus.range[1]) {
            return focus.focus;
        }
    }
}

// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}


// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}


// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// Function for inspiration
function rollInspiration() {
    let actionText = actionChart[Math.floor(Math.random() * actionChart.length)];
    let subjectText = subjectChart[Math.floor(Math.random() * subjectChart.length)];
    let inspirationText = `<br>Action: ${actionText}<br>Subject: ${subjectText}`;
    addResult("Inspiration: " + inspirationText);
}

// Function to download results
function downloadResults() {
    const resultContainer = document.getElementById('result-container');
    let textToDownload = resultContainer.innerText;

    const blob = new Blob([textToDownload], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'results.txt';

    link.click();
}
// List of random clues
const clues = [
    "A crumbling journal filled with illegible handwriting, except for one chilling phrase repeated throughout",
    "A strange symbol etched into the underside of a desk",
    "A broken locket containing a photograph of an unrecognizable landscape",
    "A black feather that radiates an unnatural warmth",
    "A map with a previously unknown island circled in red",
    "A series of receipts from an apothecary for strange, unidentifiable powders",
    "An audio recording of deep, guttural chanting in an unknown language",
    "A newspaper clipping detailing an unexplained mass disappearance",
    "A locked box that hums faintly when touched",
    "A handwritten will that mentions 'those who sleep beneath the waves'",
    "A half-burned book with diagrams of humanoid creatures with tentacles",
    "A melted wax figure found in a locked room",
    "A faint trail of a viscous, glowing liquid leading into the woods",
    "A brass key that doesn't fit any known lock in town",
    "A photograph of a group of people, with one face scratched out violently",
    "A diary entry that ends abruptly with the phrase, 'It knows where I am'",
    "A pair of shoes filled with damp sand, found far from any water source",
    "A calendar marked with symbols instead of dates",
    "A black stone that feels heavier than it should and gives off a low hum",
    "A bloodstained letter pleading for help, postmarked decades ago",
    "A telescope that shows strange, moving shapes in the night sky",
    "A mirror that reflects a different background than the room it's in",
    "A statue of an unknown deity with mismatched, alien proportions",
    "A collection of teeth, none of which are human",
    "A melted candle that smells faintly of the sea",
    "A set of coordinates leading to the middle of an empty field",
    "A journal entry describing an unknown language spoken in dreams",
    "A torn scrap of paper with an intricate symbol drawn in ink",
    "A book that smells faintly of saltwater and decaying wood",
    "A child’s drawing of a creature no one recognizes",
    "A patch of ground where nothing grows, with claw marks nearby",
    "A piece of driftwood carved with strange, flowing runes",
    "A clock that ticks backward, with no way to stop it",
    "A compass that spins wildly when brought near the ocean",
    "A jar of soil that emits a faint, rhythmic vibration",
    "A wooden mask with holes for six eyes",
    "A string of pearls that glow faintly in the dark",
    "A silver spoon with a name engraved that no one in town recognizes",
    "A cracked monocle that reveals writing invisible to the naked eye",
    "A leather glove with a map drawn on the inside of the palm",
    "A faded poster for a play that never happened",
    "A pair of glasses that show shadowy figures hovering behind people",
    "A partially decayed book describing rituals for summoning 'those beyond the veil'",
    "A newspaper photo showing someone who looks identical to a party member",
    "A seashell that emits faint whispers when held to the ear",
    "A matchbook from an unknown tavern called 'The Whispering Anchor'",
    "A ledger listing debts owed to someone referred to as 'The Sleeper'",
    "A broken knife with a blade made of an unearthly material",
    "A hand-drawn map with a town that doesn’t exist",
    "A tin box containing feathers, teeth, and a small lock of hair",
    "A deep scratch carved into a wooden floor, leading to nowhere",
    "A box of matches, each stick engraved with a unique rune",
    "A letter from an old friend, asking for help but signed with a different name",
    "A photograph of the stars, with one constellation circled",
    "A torn page from a ship's log, describing a 'shadow in the water'",
    "A clockwork device that, when wound, plays a discordant melody",
    "A stone tablet engraved with a scene of people worshiping a monstrous figure",
    "A playing card with an unrecognizable suit and number",
    "A doll missing its eyes, with a note that reads, 'It’s watching'",
    "A brass lantern that doesn’t require any fuel to burn",
    "A mural in a cave depicting an apocalyptic event",
    "A knife carved from bone, with symbols etched into the blade",
    "A small jar of black sand that feels unnaturally cold",
    "A faded postcard from a town that was destroyed decades ago",
    "A roll of film showing shapes moving in the dark",
    "A pair of boots with barnacles growing on them",
    "A violin bow made from an unidentifiable material",
    "A scratched record that plays a haunting melody, interrupted by whispers",
    "A severed finger encased in amber",
    "A rusted coin with an unrecognizable insignia",
    "A string of lights that flicker in a pattern resembling Morse code",
    "A telescope that shows the moon with a massive, crawling shadow on its surface",
    "A melted key that emits a faint glow",
    "A child's toy that repeats phrases no one remembers it saying before",
    "A broken compass needle that always points east",
    "A cracked bell that rings on its own during the night",
    "A collection of insect husks arranged in a deliberate pattern",
    "A leather-bound notebook with entries in multiple handwriting styles",
    "A vial of glowing green liquid that smells faintly of seaweed",
    "A porcelain mask that seems to change expression when no one is looking",
    "A photograph of a building that doesn’t exist in the town",
    "A map of the constellations, with additional stars that don’t belong",
    "A disembodied voice heard near a specific landmark",
    "A door handle found buried in the ground",
    "A journal entry detailing a ritual to ward off 'the approaching tide'",
    "A letter stamped with an unidentifiable seal",
    "A bird’s nest made entirely of human hair",
    "A silver bracelet that leaves burns when worn too long",
    "A clock face with thirteen hours, stuck at midnight"
];


// Function to generate a random clue
function generateRandomClue() {
    const randomClue = clues[Math.floor(Math.random() * clues.length)];
    addResult(`Random Clue: ${randomClue}`);
}

// Event listener for the new "Generate Random Clue" button
document.getElementById('generateClueBtn').addEventListener('click', generateRandomClue);
// Function to clear the results
document.getElementById('clearResultsBtn').addEventListener('click', function() {
    document.getElementById('result-container').innerHTML = ''; // Clears the results
});


// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}
// Investigation Lead Tables (Main Table and Sub-Tables)
const investigationLeads = [
    {
        name: "Witness", // 1st Table
        subTable: [
            "A homeless person who saw strange figures lurking near the docks.",
            "A child who claims they saw a monster in the woods.",
            "A shopkeeper who overheard a hushed conversation in a foreign language.",
            "A police officer who is reluctant to talk, but knows more than they are letting on.",
            "A historian who vaguely recognizes symbols from ancient cultures.",
            "A cultist who recently left the cult and is willing to talk, but fears retribution."
        ]
    },
    {
        name: "Document", // 2nd Table
        subTable: [
            "A coded message written in a complex cipher.",
            "A torn page from a long-lost grimoire describing a ritual.",
            "A series of architectural blueprints for a hidden underground complex.",
            "A will that leaves a strange inheritance with cryptic instructions.",
            "A map with unsettling landmarks pointing to a location beyond the realm of known science.",
            "An old photograph with odd and unsettling characters."
        ]
    },
    {
        name: "Location", // 3rd Table
        subTable: [
            "An abandoned asylum filled with disturbing graffiti and remnants of its former patients.",
            "A desecrated church with signs of a ritual sacrifice.",
            "A hidden chamber beneath a historical landmark.",
            "A remote island shrouded in perpetual fog.",
            "A seemingly ordinary house with an abnormally high number of cats.",
            "An antique shop with rare and unsettling goods."
        ]
    },
    {
        name: "Symbol", // 4th Table
        subTable: [
            "An ancient glyph found carved into a tree, repeating in varying sizes.",
            "A symbol painted in blood on a wall, clearly invoking something unholy.",
            "A strange emblem worn by a secretive society.",
            "A geometric shape that appears to shift and change as you look at it.",
            "A recurring image in dreams and nightmares.",
            "A symbol found on animals found mutilated or dead."
        ]
    },
    {
        name: "Rumor", // 5th Table
        subTable: [
            "Whispers of a pact with otherworldly beings made by the town's founders.",
            "Tales of a local family whose bloodline is cursed.",
            "Legends of a hidden treasure that attracts dark forces.",
            "Stories of a local doctor performing forbidden experiments.",
            "A persistent rumor of a gateway to another dimension.",
            "Whispers of a secret coven who regularly summon forth entities."
        ]
    },
    {
        name: "Artifact", // 6th Table
        subTable: [
            "A compass that points to a location that doesn't exist on any map.",
            "A mirror that reflects a distorted version of reality.",
            "A music box that plays a melody that induces madness.",
            "A mask that allows the wearer to see into another dimension.",
            "A strange stone that radiates an unnatural energy.",
            "A book bound in human skin that whispers secrets in a dead language."
        ]
    }
];

// Function to generate a random investigation lead
function generateInvestigationLead() {
    const mainRoll = Math.floor(Math.random() * 6);  // 1d6 roll for the main table (0-5)
    const subTable = investigationLeads[mainRoll].subTable;
    const subRoll = Math.floor(Math.random() * 6);  // 1d6 roll for the sub-table (0-5)
    
    const result = `Investigation Lead: ${investigationLeads[mainRoll].name} - ${subTable[subRoll]}`;
    addResult(result); // Display the result
}

// Event listener for the "Generate Investigation Lead" button
document.getElementById('generateInvestigationBtn').addEventListener('click', generateInvestigationLead);
// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}

// Attach event listeners for buttons
document.getElementById('rollEventBtn').addEventListener('click', rollEvent);
document.getElementById('inspirationBtn').addEventListener('click', rollInspiration);
document.getElementById('pickBookBtn').addEventListener('click', pickBook);
document.getElementById('downloadBtn').addEventListener('click', downloadResults);
// **Add the complications code after this**
// Investigation Lead Tables (Main Table and Sub-Tables)
const complications = [
    {
        name: "Sudden Appearance", // 1st Category
        subTable: [
            "A pack of stray dogs, their eyes glowing unnaturally, begin to stalk the investigator.",
            "A local drunk bursts in babbling about the end of the world.",
            "A swarm of insects suddenly descends, stinging and biting.",
            "A strange and unsettling child appears, staring directly at the investigator, and then vanishes without a trace.",
            "A storm gathers seemingly out of nowhere, complete with strange, unnatural lightning.",
            "A flock of birds, normally silent, begin to screech and claw at the investigator."
        ]
    },
    {
        name: "Revelation", // 2nd Category
        subTable: [
            "A dream reveals a hidden truth about the investigator's past, shaking their sense of self.",
            "An ally reveals a connection to the cult, forcing the investigator to question their trust.",
            "A location thought to be mundane is revealed to have a dark history tied to the Mythos.",
            "The investigator discovers the creature/force is actually a creation from a scientific experiment gone awry.",
            "A lost family member returns, and they don't want help but rather to offer help to 'join them.'",
            "The ritual the enemy group was trying to perform has already happened, and you are now too late."
        ]
      },
    {
        name: "Betrayal", // 3rd Table
        subTable: [
            "An informant sells the investigator out to the cult.",
            "A trusted friend turns against the investigator due to fear or coercion.",
            "A family member is revealed to be a cult leader, forcing the investigator to choose between blood and duty.",
            "An unlikely alliance happens, and the investigators are framed for the crimes.",
            "They were a patsy, and something they did unleashed the evil.",
            "Allies, who are not infected, start to show favoritism, paranoia, etc."
        ]
    },
    {
        name: "Environmental Shift", // 4th Table
        subTable: [
            "The temperature plummets dramatically, threatening hypothermia.",
            "A thick fog rolls in, obscuring vision and muffling sounds.",
            "A torrential downpour floods the streets, making travel difficult and revealing hidden dangers.",
            "The sky turns an unnatural color, unsettling the investigator.",
            "An earthquake shakes the area, causing structural damage and revealing hidden passages.",
            "Strange symbols begin to materialize on surfaces, glowing with an eerie light."
        ]
    },
    {
        name: "Unexpected Arrival", // 5th Table
        subTable: [
            "A rival investigator is drawn to the same case, creating competition and conflict.",
            "A zealous journalist arrives, seeking a sensational story that could compromise the investigation.",
            "A suspicious law enforcement officer arrives, complicating the investigator's movements and raising questions.",
            "The news was fake; it was a setup. Now the real culprit has arrived to do the act.",
            "Unbeknownst to them, the person they are trying to save is the villain.",
            "The good intentions of the investigator have now doomed more people to die."
        ]
    },
    {
        name: "Lost or Damaged", // 6th Table
        subTable: [
            "The investigator's weapon breaks at a crucial moment, leaving them vulnerable.",
            "Their notes are stolen or destroyed, forcing them to rely on memory.",
            "A crucial piece of evidence is contaminated, rendering it useless.",
            "A message sent to allies is intercepted, alerting the enemy.",
            "A person they thought could have been trusted was a pawn/puppet, now dead and useless.",
            "The police, federal agency, or investigator destroys all they find."
        ]
    }
];

// Function to generate a random complication
function generateComplication() {
    const mainRoll = Math.floor(Math.random() * 6);  // Roll for the main category (0-5)
    const subTable = complications[mainRoll].subTable;
    const subRoll = Math.floor(Math.random() * 6);  // Roll for the subcategory (0-5)
    
    const result = `Complication: ${complications[mainRoll].name} - ${subTable[subRoll]}`;
    addResult(result); // Display the result
}
// NPC Motivations Table (d50)
const npcMotivations = [
    { range: [1, 3], motivation: "The NPC is seeking knowledge or information about the Mythos, perhaps from a particular tome..." },
    { range: [4, 6], motivation: "The NPC is a member of a cult, or has a hidden agenda related to one..." },
    { range: [7, 9], motivation: "The NPC is seeking revenge against another character or group..." },
    { range: [10, 12], motivation: "The NPC is motivated by greed or a desire for power..." },
    { range: [13, 15], motivation: "The NPC is desperately trying to protect something or someone..." },
    { range: [16, 18], motivation: "The NPC is driven by an otherworldly entity..." },
    { range: [19, 19], motivation: "The NPC is a scholar attempting to prove a radical theory or debunk one..." },
    { range: [20, 20], motivation: "The NPC is an artist who believes they are receiving inspiration from a supernatural source..." },
    { range: [21, 21], motivation: "The NPC is a disillusioned law enforcement officer..." },
    { range: [22, 22], motivation: "The NPC is a former adventurer seeking a quiet life..." },
    { range: [23, 23], motivation: "The NPC is a spy for a secret society..." },
    { range: [24, 24], motivation: "The NPC is a con artist..." },
    { range: [25, 25], motivation: "The NPC is a thrill seeker..." },
    { range: [26, 26], motivation: "The NPC is obsessed with a particular creature or location..." },
    { range: [27, 27], motivation: "The NPC is a doomsayer..." },
    { range: [28, 28], motivation: "The NPC is a scientist conducting forbidden experiments..." },
    { range: [29, 29], motivation: "The NPC is a healer who has delved into the occult..." },
    { range: [30, 30], motivation: "The NPC is a collector of strange and unusual items..." },
    { range: [31, 31], motivation: "The NPC is a performer using their art as a cover for their true intentions..." },
    { range: [32, 32], motivation: "The NPC is a simple person caught up in a larger situation..." },
    { range: [33, 33], motivation: "The NPC is a politician..." },
    { range: [34, 34], motivation: "The NPC is an investigative reporter..." },
    { range: [35, 35], motivation: "The NPC is a librarian or archivist..." },
    { range: [36, 36], motivation: "The NPC is a veteran soldier or adventurer..." },
    { range: [37, 37], motivation: "The NPC is a treasure hunter..." },
    { range: [38, 38], motivation: "The NPC is a gravedigger or undertaker..." },
    { range: [39, 39], motivation: "The NPC is a member of a secret society..." },
    { range: [40, 40], motivation: "The NPC is a chef or food vendor..." },
    { range: [41, 41], motivation: "The NPC is a parent who will do anything to protect their child..." },
    { range: [42, 42], motivation: "The NPC is an academic who has been studying the effects of the Mythos..." },
    { range: [43, 43], motivation: "The NPC is a tourist who has come to the area seeking adventure..." },
    { range: [44, 44], motivation: "The NPC is a historian..." },
    { range: [45, 45], motivation: "The NPC is a medium..." },
    { range: [46, 46], motivation: "The NPC is a cultist seeking a way to summon their god..." },
    { range: [47, 47], motivation: "The NPC is a creature of the Mythos..." },
    { range: [48, 48], motivation: "The NPC is a time traveler from the future or past..." },
    { range: [49, 49], motivation: "The NPC is a victim of a terrible experiment..." },
    { range: [50, 50], motivation: "The NPC is a seemingly normal person who is unknowingly being influenced by a dark power..." }
];

// Function to generate a random NPC motivation
function generateNpcMotivation() {
    let roll = Math.floor(Math.random() * 50) + 1; // Roll for the NPC motivation (1-50)
    let motivation = npcMotivations.find(motivation => roll >= motivation.range[0] && roll <= motivation.range[1]);
    addResult(`NPC Motivation: ${motivation.motivation}`);
}
// Tome Effects Table (d50)
const tomeEffects = [
    "The Tome unleashes a burst of energy, dealing 1 damage to anyone in the immediate area and forcing a Save Test to avoid being knocked prone.",
    "The reader experiences vivid hallucinations for 1d6 turns, suffering Disadvantage on all Tests.",
    "The Tome whispers a secret that grants temporary Advantage on a single Test, but also forces a Corruption Test.",
    "The reader feels an unnatural connection to the Tome, gaining the effects of a random trait from the Trait List, but also gaining a point of Corruption.",
    "A portal opens briefly, summoning a minor creature from the Mythos which the reader must evade or fight.",
    "The Tome crumbles to dust after use, but the reader gains a permanent, but minor, benefit such as a +1 bonus on a specific type of test.",
    "The Tome’s script shifts and changes, granting the reader a fleeting glimpse into another time or place, forcing a Corruption Test.",
    "The reader's shadow appears to move independently, requiring them to pass a Save Test to maintain their composure.",
    "The air around the reader crackles with energy, causing all electronics and technological devices to malfunction. This effect lasts 1d6 turns.",
    "The Tome emits a strange light that causes everyone in the area to see each other as grotesque, monstrous beings. This imposes Disadvantage on Charisma Tests for 1d3 hours.",
    "The reader gains the ability to speak in a strange, guttural language for 1d6 turns. During this time, they can communicate with animals.",
    "The Tome duplicates, and each copy has a different effect that the GM must determine.",
    "The reader swaps minds with another person in the area. They must make a Save Test to return to their own mind.",
    "The reader develops a phobia specific to the tome, which imposes Disadvantage when encountering things related to the tome in future situations.",
    "The Tome infuses the reader with arcane knowledge, granting them a new spell from the Spells list, but they also gain a point of Corruption.",
    "The reader's clothing is replaced with strange, alien garments for 1d6 hours. The clothing may have strange effects.",
    "The Tome causes the reader’s most recent wound or injury to reappear.",
    "The reader experiences an uncontrollable compulsion to repeat the last action they performed. They may break free by succeeding on a Save Test.",
    "The Tome summons a harmless but unsettling swarm of insects.",
    "The reader's skin changes color to a vibrant, unnatural hue for 1d6 hours.",
    "The Tome causes a nearby object to become possessed by a minor entity, and that object now tries to manipulate the reader.",
    "The reader experiences a sudden and intense thirst.",
    "The Tome reveals the location of another Mythos related object to the reader.",
    "The reader temporarily gains the ability to see in the dark.",
    "The Tome causes a nearby door to move to another location in the building.",
    "The reader begins to hear the thoughts of those around them, but suffers Disadvantage on Save Tests.",
    "The Tome creates a zone of silence where no sounds can be heard or created.",
    "The reader is compelled to share the contents of the tome with another person.",
    "The Tome causes an earthquake-like tremor in a small area.",
    "The reader gains the ability to understand and speak any language, but suffers Disadvantage when using their own language.",
    "The Tome reveals a future event to the reader. The reader makes a Save Test or becomes compelled to fulfill that vision.",
    "The reader gains the Insightful Trait for a limited time, but becomes intensely paranoid.",
    "The Tome summons a harmless but noisy phantom that can be seen by anyone but cannot be interacted with.",
    "The reader develops an unusual craving for a strange or forbidden food.",
    "The Tome alters the reader's perception of time, making everything seem to move incredibly fast for 1d3 turns.",
    "The reader becomes intangible and can move through solid objects for 1 turn.",
    "The Tome causes any open flames in the area to turn a strange color and burn with increased intensity.",
    "The reader gains a temporary boost to their Corruption Threshold by 2, but also becomes more vulnerable to future Corruption Tests.",
    "The reader’s blood turns to a strange color or substance for 1d6 hours.",
    "The Tome summons a minor illusion that can only be dispelled by the caster making a Test with Disadvantage.",
    "The reader begins to experience a sense of intense déjà vu, causing them to become disoriented, resulting in a Disadvantage on their next Test.",
    "The reader's voice becomes distorted and unsettling, forcing others to make a Save Test to avoid being frightened.",
    "The Tome creates a localized gravity shift, causing objects and characters to float, or be pulled in different directions, for 1d3 turns.",
    "The Tome's power twists the reader's sense of self, granting a randomly chosen Trait, but also causing them to adopt a new Belief, as their core convictions are shaken.",
    "The Tome releases a burst of toxic fumes, forcing anyone nearby to make a Constitution Save Test or suffer damage.",
    "The Tome opens a rift to another dimension, pulling the reader's senses into a nightmarish place for 1d6 minutes.",
    "The reader's reflection in any reflective surface becomes an independent entity, mirroring their movements for 1d6 hours.",
    "The Tome grants the reader the power to create an illusionary duplicate of themselves for 1d6 hours, though the duplicate is highly fragile.",
    "The Tome whispers a command to the reader, compelling them to carry out a task against their will unless they pass a Willpower Save Test.",
    "The reader experiences a sudden, overwhelming sense of dread, which causes them to become paralysed with fear for 1d6 turns.",
    "The Tome causes the reader’s thoughts to become chaotic, disorganizing their mind and causing them to suffer Disadvantage on Intelligence Tests for 1d6 hours.",
    "The Tome summons a small, spectral creature that latches onto the reader, granting them increased speed but draining their life force slowly over time.",
    "The reader becomes aware of the presence of a nearby ghost, whose attention they must evade or face its wrath.",
    "The Tome causes the reader to briefly relive a traumatic memory, which they must endure to prevent becoming overwhelmed by panic.",
    "The reader finds themselves drawn to a hidden location marked by an ancient symbol, where a hidden treasure or deadly trap awaits.",
    "The Tome grants the reader a sudden surge of strength, doubling their Physical attribute for 1d6 turns.",
    "The Tome causes the reader's senses to become heightened, allowing them to hear even the faintest of sounds or detect the slightest movements."
];

// Adventure Generator
function generateRandomAdventure() {
    const hooks = [
        "A dying messenger whispers a cryptic warning.",
        "A town elder requests the party’s help to retrieve an ancient relic.",
        "A mysterious figure hires the group to investigate strange disappearances.",
        "The party stumbles upon a village gripped by fear of an unseen force.",
        "A bard spreads tales of a treasure lost in a forbidden land.",
        "A caravan of refugees arrives, fleeing a terrible disaster.",
        "A rival adventuring party challenges the group to a race for glory.",
        "A magical storm leaves the countryside altered and teeming with strange creatures.",
        "An ancient prophecy mentions the party by name, drawing the attention of many.",
        "The local tavern burns down, revealing a hidden vault beneath its ruins.",
        "A strange artifact washes up on the shore, causing whispers of a forgotten god."
    ];

    const quests = [
    "Retrieve a stolen artifact of great power, possibly a Tome or magic item, from an abandoned tower or a cult hideout.",
    "Protect the village from a marauding beast, perhaps a Mythos monster like a Shoggoth or a Hound of Tindalos.",
    "Escort a caravan through dangerous territory, which could include avoiding encounters with Serpentis Guard patrols or other hostile forces.",
    "Rescue a kidnapped noble from an enemy stronghold, such as a cult headquarters or a Deep One city.",
    "Uncover the source of a mysterious plague spreading through the land, which might be an Eldritch Plague or the result of a Colour Out of Space.",
    "Destroy a cursed item threatening the local populace, such as a Tome or a magic item with a Corruption effect.",
    "Negotiate peace between two warring factions before conflict erupts, perhaps between Free Humanity and the Children of Yig, or different cults vying for power.",
    "Track down a powerful sorcerer who has gone rogue, potentially one driven mad by the Mythos or wielding forbidden magic from Tomes.",
    "Investigate a series of mysterious disappearances in a nearby village, which might be linked to Deep Ones, Mi-Go, or a cult.",
    "Recover an ancient weapon hidden deep in an abandoned mine, which could be an Innovation or a magic item used by the Elder Things.",
    "Solve the mystery of a haunted forest that grows darker every night, possibly due to the influence of a Great Old One or the Thing from the Dark Forest."
];


    const villains = [
        "A scholar obsessed with forbidden knowledge who has infiltrated a university to steal a dangerous tome.",
        "A cult leader raising an army of zombies to serve a dark god.",
        "A Shoggoth, a sentient mass of flesh, seeking to expand its territory and assimilate all life.",
        "A corrupt noble secretly leading a cult that sacrifices innocents to gain power and wealth from a dark entity.",
        "A Mi-Go wearing the flesh of their victims, infiltrating society to assassinate leaders and sow chaos.",
        "An ancient sorcerer, driven mad by the Mythos, seeking to revive a lost city through dangerous rituals.",
        "A cult leader amassing followers to summon an Ancient One from beyond the stars.",
        "A being from another dimension disguised as a healer, spreading a corrupting disease to weaken humanity for its masters.",
        "A ruthless mercenary captain hired by a cult to recover a powerful artifact, not knowing it will unleash a cosmic horror.",
        "A being from the Dreamlands angered by mortals trespassing into its realm and disrupting the balance between worlds.",
        "A cursed tome, manipulating events through its reader to bring about the return of a Great Old One."
    ];

    const locations = [
        "The ruins of an Elder Thing temple, now partially submerged, with strange geometry that defies human understanding.",
        "A forest warped by the presence of a Colour Out of Space, where the trees have strange, unnatural colors and the very air seems to corrupt the mind.",
        "A bustling port city like Innsmouth, where Deep One hybrids walk among humans and ancient rituals take place in the shadows.",
        "A remote, windswept mountain fortress, once a stronghold of a forgotten cult, now haunted by the echoes of their forbidden rites.",
        "A vast, desolate desert hiding ancient ruins where the Inhabitants of the Nameless City fled and still dwell.",
        "A sunken city of the Deep Ones, with cyclopean architecture and bioluminescent flora, where dark secrets of the ocean depths are preserved.",
        "An abandoned castle in the Dreamlands, its spectral inhabitants are the lingering memories of those who have become lost in its surreal depths.",
        "A crumbling tower of a sorcerer driven mad by the Mythos, its traps designed to protect their forbidden experiments and arcane knowledge.",
        "A volcanic cavern where a gateway to another dimension has opened, guarded by beings from that realm whose forms are made of living flame.",
        "An icy tundra in Siberia, where the Elder Things lie hibernating beneath the snow and the White Giants roam.",
        "A magical floating island in the Dreamlands, where the very fabric of reality is thin and a dangerous ritual must be performed to reach it."
    ];

    const clues = [
    "The Investigators might find a cryptic map among the belongings of a deceased cultist, which leads to a hidden location marked with strange symbols.",
    "These symbols may also be found etched into the walls of an ancient temple, and their meaning could be explained in a lesser tome.",
    "A torn page from a greater tome may reveal a ritual requiring a specific location, such as the Dreamlands.",
    "A riddle scrawled inside an old tome could point to a place with a Mystical Environmental Trait, making it suitable for magic.",
    "An overheard conversation between Deep One hybrids in a tavern could expose their plans to sacrifice humans.",
    "Alternatively, a glowing gemstone, reacting to the presence of the Mythos, might be a piece of technology from the Elder Things.",
    "The Investigators might also discover a diary from a slain Mi-Go, detailing their plans to infiltrate a city.",
    "A shared dream of a Great Old One among the Investigators could reveal an impending ritual or event, such as the arrival of Azathoth.",
    "Enchanted footprints could lead to a location with a Terrifying Environmental Trait, possibly a ritual site.",
    "A coded message, hidden within an esoteric painting depicting a scene from Carcosa, may require a Tome Reader to decode.",
    "Finally, a witness may have seen the King in Yellow or one of his followers, but is too frightened to speak openly about it."
];


    const twists = [
        "The artifact they seek is already gone, claimed by a rival adventuring party.",
        "An ally reveals they have been working for the villain all along.",
        "The entire quest is a setup orchestrated by a powerful enemy.",
        "The villain is not the true mastermind but a pawn for an even greater threat.",
        "The location holds a terrible secret that could alter the fate of the world.",
        "A natural disaster threatens to complicate the party’s mission.",
        "The party’s actions inadvertently awaken an ancient evil.",
        "The villain is an old friend or family member of one of the characters.",
        "The reward promised turns out to be a trap or illusion.",
        "A powerful ally betrays the party at the worst possible moment.",
        "The villain has manipulated events to make the party look like the true antagonists."
    ];

    const rewards = [
        "The gratitude of a powerful noble who needs the artifact to protect their realm.",
        "A rare magical item promised as a reward for success.",
        "A mysterious benefactor pledges ongoing support.",
        "The party gains access to a hidden library containing forbidden knowledge.",
        "A cache of gold and jewels beyond their wildest dreams.",
        "The favor of a local deity who blesses the party with divine protection.",
        "The rescue of a grateful NPC who becomes a loyal ally.",
        "An enchanted mount that aids the party in future travels.",
        "A forgotten title or deed to land, giving the party influence and power.",
        "The villain's lair, now cleared, becomes the party's new base of operations.",
        "A powerful favor owed by a legendary hero or figure."
    ];

    // Randomly select elements from each array
    const hook = hooks[Math.floor(Math.random() * hooks.length)];
    const quest = quests[Math.floor(Math.random() * quests.length)];
    const villain = villains[Math.floor(Math.random() * villains.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const clue = clues[Math.floor(Math.random() * clues.length)];
    const twist = twists[Math.floor(Math.random() * twists.length)];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];

    // Combine all results into a single string
    const adventureResult = `
        <strong>Adventure Hook:</strong> ${hook}<br>
        <strong>Quest:</strong> ${quest}<br>
        <strong>Villain:</strong> ${villain}<br>
        <strong>Location:</strong> ${location}<br>
        <strong>Clue:</strong> ${clue}<br>
        <strong>Twist:</strong> ${twist}<br>
        <strong>Reward:</strong> ${reward}
    `;

    // Call the addResult function to display the combined result
    addResult(adventureResult);
}
document.getElementById("sensesBtn").addEventListener("click", function() {
    const senses = {
        color: ["Red", "Blue", "Green", "Purple", "Yellow", "Black", "White"],
        taste: ["Sweet", "Sour", "Salty", "Bitter", "Savory", "Umami"],
        smell: ["Lavender", "Cinnamon", "Fresh Rain", "Rotten Eggs", "Fresh Bread", "Burning Wood"],
        sound: ["Birdsong", "Thunder", "Ocean Waves", "Whistling Wind", "Footsteps", "Sizzling"]
    };

    // Randomly pick each sense
    const randomColor = senses.color[Math.floor(Math.random() * senses.color.length)];
    const randomTaste = senses.taste[Math.floor(Math.random() * senses.taste.length)];
    const randomSmell = senses.smell[Math.floor(Math.random() * senses.smell.length)];
    const randomSound = senses.sound[Math.floor(Math.random() * senses.sound.length)];

    const result = `
        Color: ${randomColor} <br>
        Taste: ${randomTaste} <br>
        Smell: ${randomSmell} <br>
        Sound: ${randomSound}
    `;

    // Add the result to the result container
    addResult(result);
});

// Event listener for the "Generate Random Adventure" button
document.getElementById('generateAdventureBtn').addEventListener('click', generateRandomAdventure);
// Function to randomly generate a Tome Effect
function generateTomeEffect() {
    let roll = Math.floor(Math.random() * 50) + 1; // Roll a d50
    let effect = tomeEffects[roll - 1]; // Get the effect based on the roll (array is zero-indexed)

    // Display the result in a single box
    addResult(`Tome Effect: ${effect}`);
}
// Modified rollEvent function
function rollEvent() {
    let targetPercentage = parseInt(document.getElementById('likelihood').value);
    let roll = Math.floor(Math.random() * 100) + 1; // Roll a 1d100
    let resultText = `You rolled a ${roll}.`;

    // Get the user input from the text box
    let userText = document.getElementById('userInput').value.trim();

    // Check if the user input is not empty and include it in the result
    if (userText) {
        resultText = `You asked: "${userText}"<br>` + resultText; // Adds the user question or phrase
    }

    // Check if the event occurs based on the likelihood (Yes/No)
    if (roll <= targetPercentage) {
        resultText += " Yes"; // Normal Yes
    } else {
        resultText += " No."; // Normal No
    }

    // Check if the roll is a double (e.g., 11, 22, 33, etc.) - Always triggers Event Focus
    if (roll % 11 === 0) {
        // Double rolled, trigger event focus, action, and subject
        let eventFocusRoll = Math.floor(Math.random() * 100) + 1; // Roll a second 1d100 for event focus
        let eventFocus = getEventFocus(eventFocusRoll);
        resultText += `<br>Event Focus: ${eventFocus}`;

        // Roll for action and subject
        let actionText = actionChart[Math.floor(Math.random() * actionChart.length)];
        let subjectText = subjectChart[Math.floor(Math.random() * subjectChart.length)];
        resultText += `<br>Action: ${actionText}<br>Subject: ${subjectText}`;
    }

    // Add the result to the container
    addResult(resultText);
	 // Clear the input field after rolling the event
    document.getElementById('userInput').value = '';
}

// Function to add the result to the results box
function addResult(resultText) {
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.createElement("div");

    resultDiv.classList.add("result");

    // Check if the result is short enough to be centered
    if (resultText.length < 100) { // Adjust this threshold based on your preferences
        resultDiv.classList.add("short");
    }

    resultDiv.innerHTML = resultText;
    resultContainer.appendChild(resultDiv);
    resultContainer.scrollTop = resultContainer.scrollHeight;
}


// Event listener for the "Roll for Event" button
document.getElementById('rollEventBtn').addEventListener('click', rollEvent);

// Event listener for the "Generate Tome Effect" button
document.getElementById('generateTomeEffectBtn').addEventListener('click', generateTomeEffect);

// Event listener for the "Generate NPC Motivation" button
document.getElementById('generateNpcMotivationBtn').addEventListener('click', generateNpcMotivation);

// Event listener for the "Generate Complications" button
document.getElementById('generateComplicationsBtn').addEventListener('click', generateComplication);

