// Batman Action Table data, extended to match chart up to 24
const actionTable = {
  "1-2": [6, 11, 13, 15, 18, 21, 24, 28, 32, 36, 40],
  "3-4": [5, 9, 11, 13, 15, 18, 21, 24, 28, 32, 36],
  "5-6": [4, 7, 9, 11, 13, 15, 18, 21, 24, 28, 32],
  "7-8": [4, 5, 7, 9, 11, 13, 15, 18, 21, 24, 28],
  "9-10": [3, 4, 5, 7, 9, 11, 13, 15, 18, 21, 24],
  "11-12": [3, 3, 4, 5, 7, 9, 11, 13, 15, 18, 21],
  "13-15": [3, 3, 3, 4, 5, 7, 9, 11, 13, 15, 18],
  "16-18": [3, 3, 3, 3, 4, 5, 7, 9, 11, 13, 15],
  "19-21": [3, 3, 3, 3, 3, 4, 5, 7, 9, 11, 13],
  "22-24": [3, 3, 3, 3, 3, 3, 4, 5, 7, 9, 11],
};

// Map Opposing Value ranges to column indices
const opposingValueMapping = {
  "0": 0,
  "1-2": 1,
  "3-4": 2,
  "5-6": 3,
  "7-8": 4,
  "9-10": 5,
  "11-12": 6,
  "13-15": 7,
  "16-18": 8,
  "19-21": 9,
  "22-24": 10,
};

// Roll 2d10 with exploding doubles
function rollDice() {
  let total = 0;
  let roll;
  let rolls = [];
  do {
    roll = Math.floor(Math.random() * 10 + 1) + Math.floor(Math.random() * 10 + 1);
    total += roll;
    rolls.push(roll);
  } while (roll % 11 === 0); // Exploding doubles (11, 22, etc.)
  return { total, rolls };
}

// Determine column shifts based on the closest matching threshold
function getColumnShifts(rollTotal) {
  const thresholds = [
    { value: 13, shift: 1 },
    { value: 15, shift: 2 },
    { value: 18, shift: 3 },
    { value: 21, shift: 4 },
    { value: 24, shift: 5 },
    { value: 28, shift: 6 },
    { value: 32, shift: 7 },
    { value: 36, shift: 8 },
    { value: 40, shift: 9 },
  ];

  let columnShift = 0;
  for (const threshold of thresholds) {
    if (rollTotal >= threshold.value) {
      columnShift = threshold.shift;
    } else {
      break;
    }
  }
  return columnShift;
}

// Main event listener
document.getElementById("rollDice").addEventListener("click", function () {
  const actingValue = document.getElementById("actingValue").value;
  const opposingValue = document.getElementById("opposingValue").value;

  if (!actingValue || !opposingValue) {
    document.getElementById("result").textContent = "Please select both values!";
    return;
  }

  const row = actionTable[actingValue];
  const columnIndex = opposingValueMapping[opposingValue];

  if (!row || columnIndex === undefined) {
    document.getElementById("result").textContent = "Invalid combination!";
    return;
  }

  const chartValue = row[columnIndex];
  const { total, rolls } = rollDice();
  const columnShifts = getColumnShifts(total);

  const success = total >= chartValue;

  document.getElementById("result").innerHTML = `
    <p>Dice Rolls: ${rolls.join(", ")}</p>
    <p>Total Roll: ${total}</p>
    <p>Column Shifts: ${columnShifts}</p>
    <p>Result: ${success ? "Success" : "Failure"}</p>
  `;
});
