function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateTavern() {
    const names = [
        "The Rusty Anchor",
        "The Groggy Goblin",
        "The Dancing Dragonfly",
        "The Whistling Wyrm",
        "The Tipsy Troll",
        "The Silver Serpent",
        "The Wandering Minstrel",
        "The Moonlit Mug",
        "The Laughing Lich",
        "The Bleeding Boar",
        "The Drunken Druid",
        "The Hearthstone Inn",
        "The Crooked Crow",
        "The Salty Seadog",
        "The Mystic Moon",
        "The Fiery Flagon",
        "The Broken Shield",
        "The Whispering Willow",
        "The Crimson Chalice",
        "The Greedy Griffon",
        "The Sleepy Sorcerer",
        "The Golden Goblet",
        "The Weary Warrior",
        "The Serpent's Sip",
        "The Enchanted Elm"
    ];
    const descriptions = [
        "A cozy, dimly lit tavern with an air of mystery.",
        "A bustling tavern with cheerful patrons and lively music.",
        "A quiet, secluded place often frequented by adventurers."
    ];
    const tavernkeepers = [
        "Elderly Human Male, known for his endless tales of the sea, with a voice as rough as the waves.",
        "Middle-Aged Orc Female, with a large scar across her face, serves drinks with a stern, no-nonsense attitude.",
        "Young Elf Male, graceful and quick, always has a smile and a trick up his sleeve for entertaining guests.",
        "Adult Dwarf Female, stout and jovial, her laughter is infectious as she pours the best ale in town.",
        "Old Gnome Male, with a mischievous twinkle in his eye, often engages patrons in riddle contests.",
        "Young Adult Halfling Female, nimble and cheerful, she's known for her acrobatic serving style.",
        "Middle-Aged Tiefling Male, with horns curling back from his forehead, his demeanor is warm despite his intimidating appearance.",
        "Elderly Human Female, her eyes sharp and knowing, she's seen many come and go, sharing wisdom with those who listen.",
        "Adult Half-Elf Male, charming and well-spoken, he has a knack for knowing exactly what his patrons need to hear.",
        "Young Goblin Female, quick and sneaky, often seen slipping extra treats to regulars under the counter.",
        "Old Orc Male, once a great warrior, now finds peace in serving hearty meals and telling stories of battle.",
        "Middle-Aged Dragonborn Female, her scales shimmer in the light, she's proud of her exotic drink concoctions.",
        "Young Adult Human Male, eager and ambitious, trying to make the tavern famous with his unique recipes.",
        "Elderly Elf Female, her voice is like a melody, she sings old songs while tending to the bar.",
        "Adult Dwarf Male, with a beard that's almost as famous as his brew, he's gruff but fair.",
        "Young Aasimar Male, his presence brings a sense of calm, often seen mediating disputes among patrons.",
        "Middle-Aged Tiefling Female, her eyes glow faintly, she's renowned for her mysterious, herbal-infused drinks.",
        "Old Half-Orc Female, her strength is still evident in how she handles rowdy customers, yet she's surprisingly gentle with children.",
        "Young Adult Gnome Female, inventive and energetic, often surprises guests with her whimsical decorations.",
        "Adult Human Male, bald and burly, he's known for his wrestling challenges and the strength of his homemade spirits."
    ];
    const patrons = [
        "A thin male elf is sitting in a booth towards the back, watching the entrance to the tavern intently.",
        "A stunning female human is sitting near the fireplace, arguing loudly with someone else.",
        "Human Female, Middle-Aged - She's reading an ancient scroll while sipping from a tankard, occasionally glancing around as if expecting someone.",
        "Elf Male, Young - He's playing a lute in the corner, his eyes closed, lost in the melody, ignoring the crowd.",
        "Dwarf Male, Elderly - He's loudly discussing mining techniques with anyone who'll listen, his beard stained with ale.",
        "Halfling Female, Young Adult - She's dancing on a table, laughing and spinning, her movements light and joyful.",
        "Tiefling Male, Middle-Aged - He's in a dark corner, playing cards with an intensity that suggests more than coin is at stake.",
        "Gnome Female, Elderly - She's knitting something intricate while murmuring stories about her travels to anyone sitting nearby.",
        "Orc Male, Young - He's arm wrestling with a local, drawing a crowd that cheers loudly with each move.",
        "Human Male, Old - He's carving a piece of wood, his hands shaky but precise, his eyes looking far into the distance as if recalling old memories.",
        "Drow Female, Adult - She's scanning the room with piercing eyes, her cloak pulled tightly around her, clearly not from around here.",
        "Dragonborn Female, Young Adult - She's sitting alone, sketching maps on parchment, occasionally looking up to check the door.",
        "Half-Elf Male, Adult - He's deep in conversation with the tavern keeper, discussing trade routes and goods, his tone serious.",
        "Goblin Male, Young - He's sneakily trying to pickpocket the patrons, moving from one to another with a mischievous grin.",
        "Aasimar Female, Adult - She's at the bar, her radiant presence calming the atmosphere, healing minor injuries for those who ask.",
        "Half-Orc Female, Middle-Aged - She's sharpening her axe, her movements methodical, occasionally exchanging nods with other warriors.",
        "Human Male, Young - He's attempting to impress a group with tales of his adventures, his enthusiasm barely covering his inexperience.",
        "Elf Female, Elderly - She's telling fortunes with cards, her voice soft but her predictions striking a chord with listeners.",
        "Dwarf Female, Adult - She's laughing boisterously, sharing stories of her smithing exploits with a group of admirers.",
        "Gnome Male, Young Adult - He's setting up small mechanical toys on the table, explaining their workings to fascinated children.",
        "Tiefling Female, Young - She's writing in a journal, her expression thoughtful, occasionally pausing to watch the crowd.",
        "Orc Female, Old - She's teaching younger orcs about honor in battle, her voice deep and commanding, with a scarred face.",
        "Human Male, Adult - He's trying to sell maps to supposed treasures, his eyes always on the lookout for potential buyers.",
        "Half-Elf Female, Young - She's reading from a book of spells, practicing incantations under her breath, occasionally causing small magical effects.",
        "Dragonborn Male, Adult - He's in deep meditation, his scales reflecting the dim light, ignoring the noise around him.",
        "Elf Male, Middle-Aged - He's playing chess with an invisible opponent, his moves deliberate, occasionally commenting on strategy.",
        "Human Female, Young Adult - She's sketching the patrons, capturing their essence with quick, skilled strokes, her portfolio spread out before her."
    ];
    const rumors = [
        "Wreckage from a ship washed ashore by the docks. A badly injured survivor is being cared for by the sheriff's family.",
        "An evil usurper took the throne and killed all of the heirs, except a baby who was valiantly rescued.",
        "The old crypt in the Whispering Hills has been disturbed; they say the dead are walking again.",
        "An elven prince was seen in disguise, seeking the lost gem of the forest.",
        "A dragon has been spotted near the northern mountains, hoarding treasures beyond imagination.",
        "The mayor of our town isn't human; some say he's been replaced by a doppelganger.",
        "There's a hidden thieves' guild operating right under our noses, with secret entrances in the market square.",
        "A cursed artifact from the ancient war was unearthed in Farmer Bell's field.",
        "The lake to the east turns to blood under the full moon; it's said to be the work of a vengeful spirit.",
        "A bard from the south claims to have found the map to the Library of the Ancients.",
        "The local blacksmith is secretly forging weapons for an uprising against the kingdom.",
        "Witches gather at the seventh hill on the night of the new moon; they're brewing something powerful.",
        "An invisible beast has been stalking the woods, leaving only footprints and missing people.",
        "The old lighthouse keeper vanished, and now lights guide ships into the rocks.",
        "A group of adventurers returned from the Underdark with tales of a city of dark elves planning an invasion.",
        "There's a hidden underground market where you can buy anything, even magic that's banned by the crown.",
        "The innkeeper's son has the gift of prophecy; he foresaw a great storm that would change our lives.",
        "A mysterious cloaked figure has been asking about the location of the Silver Serpent cult.",
        "The well in the village square leads to a labyrinth of tunnels, some say to a forgotten dwarven kingdom.",
        "Ghostly lights dance over the graveyard at midnight, luring the unwary to their doom.",
        "A minstrel's song spoke of a treasure hidden in the ruins of the old castle, guarded by spectral knights.",
        "The river has turned black, and creatures are emerging from it at night; the water is cursed!",
        "A new guild has appeared, offering protection but at a steep price; they're called the Shadow Hands.",
        "Merchants whisper of a new trade route through the forbidden marshes, but it's guarded by something ancient.",
        "An alchemist in town claims to have created a potion of eternal youth, but it requires a rare, dangerous ingredient.",
        "The forest to the west is growing, trees moving closer to the village each night; they say the forest itself is alive.",
        "A noble’s son was kidnapped by a band of goblins, and they demand a magical item for his safe return."
    ];
    const mealsOptions = [
        "An almond croissant and soggy bacon, with a side of boiled potatoes.",
        "Stone oven-roasted veal and brown rice, with sliced mushrooms on the side.",
        "Roasted tuna and squash, with beer bread on the side.",
        "Grilled pork chops served with baked potatoes and herb butter.",
        "A hearty stew made with venison, carrots, and onions, served with crusty bread."
    ];

    const lodging = [
        { type: "Common Room", baseRate: 1, unit: "sp" },
        { type: "Single Room", baseRate: 2, unit: "sp" },
        { type: "Double Room", baseRate: 3, unit: "sp" },
        { type: "Large Room", baseRate: 4, unit: "sp" }
    ];
    const foodAndDrink = [
        { item: "Breakfast", baseRate: 1, unit: "cp" },
        { item: "Lunch", baseRate: 2, unit: "cp" },
        { item: "Dinner", baseRate: 3, unit: "cp" },
        { item: "Ale", baseRate: 1, unit: "cp" }
    ];

    // Set tavern details
    document.getElementById("tavern-name").innerText = getRandomItem(names);
    document.getElementById("description-container").innerHTML = `<h3>Description</h3><p>${getRandomItem(descriptions)}</p>`;
    document.getElementById("tavernkeeper-container").innerHTML = `<h3>Tavernkeeper</h3><p>${getRandomItem(tavernkeepers)}</p>`;

    // Set notable patrons
    const selectedPatrons = [...patrons].sort(() => 0.5 - Math.random()).slice(0, 2);
    document.getElementById("notable-patrons-container").innerHTML = `
        <h3>Notable Patrons</h3>
        <ul>${selectedPatrons.map(p => `<li>${p}</li>`).join("")}</ul>
    `;

    // Set rumors
    const selectedRumors = [...rumors].sort(() => 0.5 - Math.random()).slice(0, 2);
    document.getElementById("rumors-container").innerHTML = `
        <h3>Rumors, Gossip, and Hearsay</h3>
        <ul>${selectedRumors.map(r => `<li>${r}</li>`).join("")}</ul>
    `;

    // Set meals
    const randomizedMeals = mealsOptions
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((meal, idx) => {
            const mealNames = ["Breakfast", "Lunch", "Dinner"];
            return `<li>${mealNames[idx]}: ${meal}</li>`;
        })
        .join("");
    document.getElementById("meals-container").innerHTML = `<h3>Meals</h3><ul>${randomizedMeals}</ul>`;

    // Generate lodging services
    const lodgingHTML = lodging
        .map(room => `<li>${room.type}: ${room.baseRate + Math.floor(Math.random() * 3)} ${room.unit}</li>`)
        .join("");
    const foodHTML = foodAndDrink
        .map(food => `<li>${food.item}: ${food.baseRate + Math.floor(Math.random() * 2)} ${food.unit}</li>`)
        .join("");

    document.getElementById("services-container").innerHTML = `
        <h3>Tavern Services</h3>
        <ul>${lodgingHTML}</ul>
        <h3>Food and Drink</h3>
        <ul>${foodHTML}</ul>
    `;
}

function downloadTavern() {
    const content = document.body.innerText;
    const filename = `${document.getElementById('tavern-name').innerText}.txt`;
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    element.style.display = 'none'; // Hide the element
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.addEventListener("DOMContentLoaded", generateTavern);
// Existing code in script.js
// (Other functions, event handlers, etc.)

// Add this at the end
function goHome() {
    window.location.href = window.location.origin + "/";
}

