// Batman Action Table data (simplified for example)
const actionTable = {
  "1-2": [6, 11, 13, 15, 18, 21, 24, 28, 32, 36, 40],
  "3-4": [5, 9, 11, 13, 15, 18, 21, 24, 28, 32, 36],
  "5-6": [4, 7, 9, 11, 13, 15, 18, 21, 24, 28, 32],
  // Add more rows as needed...
};

// Helper function to find the row based on Acting Value
function findRow(value) {
  for (let range in actionTable) {
    const [min, max] = range.split('-').map(Number);
    if (value >= min && value <= max) {
      return actionTable[range];
    }
  }
  return null;
}

// Main form submission logic
document.getElementById("calculatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const actingValue = parseInt(document.getElementById("actingValue").value);
  const opposingValue = parseInt(document.getElementById("opposingValue").value);

  const row = findRow(actingValue);
  if (!row) {
    document.getElementById("result").textContent = "Invalid Acting Value!";
    return;
  }

  const columnIndex = Math.floor(opposingValue / 2);
  const result = row[columnIndex];

  if (result !== undefined) {
    document.getElementById("result").textContent = `Result: ${result}`;
  } else {
    document.getElementById("result").textContent = "Invalid Opposing Value!";
  }
});
