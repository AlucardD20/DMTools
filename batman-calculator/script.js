// Batman Action Table data
const actionTable = {
  "1-2": [6, 11, 13, 15, 18, 21, 24, 28, 32, 36, 40],
  "3-4": [5, 9, 11, 13, 15, 18, 21, 24, 28, 32, 36],
  "5-6": [4, 7, 9, 11, 13, 15, 18, 21, 24, 28, 32],
  "7-8": [4, 5, 7, 9, 11, 13, 15, 18, 21, 24, 28],
  "9-10": [3, 4, 5, 7, 9, 11, 13, 15, 18, 21, 24],
  "11-12": [3, 3, 4, 5, 7, 9, 11, 13, 15, 18, 21],
};

// Helper function to get column index for Opposing Value
function getColumnIndex(value) {
  const columnMapping = {
    "0": 0,
    "1": 1,
    "3": 2,
    "5": 3,
    "7": 4,
    "9": 5,
    "11": 6,
    "13": 7,
    "16": 8,
    "19": 9,
    "22": 10,
  };
  return columnMapping[value];
}

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
  const columnIndex = getColumnIndex(opposingValue);

  if (row && columnIndex !== undefined) {
    const result = row[columnIndex];
    document.getElementById("result").textContent = `Result: ${result}`;
  } else {
    document.getElementById("result").textContent = "Invalid combination!";
  }
});
