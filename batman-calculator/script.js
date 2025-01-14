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

// Main form submission logic
document.getElementById("calculatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const actingValue = document.getElementById("actingValue").value;
  const opposingValue = document.getElementById("opposingValue").value;

  if (!actingValue || !opposingValue) {
    document.getElementById("result").textContent = "Please select both values!";
    return;
  }

  const row = actionTable[actingValue];
  const columnIndex = opposingValueMapping[opposingValue];

  if (row && columnIndex !== undefined) {
    const result = row[columnIndex];
    document.getElementById("result").textContent = `Result: ${result}`;
  } else {
    document.getElementById("result").textContent = "Invalid combination!";
  }
});
