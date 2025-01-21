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
    "The Alchemy of Happiness", "Aurora consurgens", "Secret Key of Solomon", "Treatise on the Reintegration of Beings", "The Focus of Life",
    "Greek Magical Papyri", "A Guide to Grand-Jury Men", "Liber Officiorum Spirituum", "The Book of Lies", "Rosary of Philosophers",
    "Das Kloster", "Aurea Catena Homeri", "Greek Papyri", "Tripus Aureus", "A Treatise on White Magic", "Liber ignium", "Atalanta Fugiens",
    "Sigillum Dei Aemeth", "Leyden papyrus X", "Pseudomonarchia Daemonum", "The Hermetic Triumph", "De Alchemia", "Museum Hermeticum",
    "Steganographia", "Theatrvm Chemicvm", "The Nabataean Agriculture", "Magic: History, Theory, and Practice", "The Red Dragon", "Exorcation texts",
    "Secreta Secretorum", "Rosarium Philosophorum", "The Book of Mediums", "The Mirror of Alchimy", "Great Book of Magical Charms",
    "The Kybalion", "Nuremberg Handschrift GNM 3227a", "The Book of Ceremonial Magic", "Grand Albert", "The Discovery of Witchcraft",
    "Book of Oberon", "The Twelve Keys of Basil Valentine", "Chaldean Oracles", "Arbatel de magia veterum", "Pow-Wows; or, Long Lost Friend",
    "Corpus Hermeticum", "Book of Magical Charms", "De praestigiis daemonum", "The Golem and its Servants", "Fasciculus Chemicus",
    "Secretum Secretorum", "The Rosicrucian Cosmo-Conception", "The Triangular Book of St. Germain", "Book of Saint Cyprian", "Biblia de inferno",
    "Cantilenae Intellectuales de Phoenice Redivivo", "Steganographia", "De nigromancia", "Esoteric Buddhism", "The Geheminis of the Runen",
    "Magical Treatise of Solomon", "The Most Holy Trinosophia", "Alexandria Codex", "Papyri Graecus Holmiensis", "Sybilline Books",
    "Senji Ryakketsu", "Theatrvm Chemicvm Britannicvm", "Speculum Philosophiae", "The Golden Chain of Homer", "The Kybalion",
    "Secreta secretorum", "Das Geheminis des Runen", "The Book of Pleasure: Psychology of Ecstasy", "The Book of Abramelin", "The Philosophers’ Stone",
    "Tabula Smaragdina", "De Compositione Alchemiae", "Magic: Theory and Practice", "The Grand Grimoire", "The Corpus Hermeticum",
    "The Book of Lies", "The Secret Teachings of All Ages", "De Clavicvla Salomonis", "Liber ignium ad comburendos hostes", "Atlantis", "The Talmud"
];

// Function to randomly pick a book
function pickBook() {
    // Ensure the bookList is populated and the index is valid
    if (bookList.length === 0) {
        addResult("No books available in the list.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * bookList.length);
    let book = bookList[randomIndex];

    // Display the selected book
    addResult(`The selected book is: "${book}"`);
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

// Attach event listeners for buttons
document.getElementById('rollEventBtn').addEventListener('click', rollEvent);
document.getElementById('inspirationBtn').addEventListener('click', rollInspiration);
document.getElementById('pickBookBtn').addEventListener('click', pickBook);
document.getElementById('downloadBtn').addEventListener('click', downloadResults);
