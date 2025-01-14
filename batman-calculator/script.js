let logEntries = [];

// Function to update the log
function updateLog(entry) {
  logEntries.push(entry);
  document.getElementById("log").value = logEntries.join("\n");
}

// Function to download the log
function downloadLog() {
  const logContent = logEntries.join("\n");
  const blob = new Blob([logContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Batman_Calculator_Log.txt";
  link.click();
}

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

  // Update results dynamically
  document.getElementById("diceRolls").textContent = `Dice Rolls: ${rolls.join(", ")}`;
  document.getElementById("totalRoll").textContent = `Total Roll: ${total}`;
  document.getElementById("columnShifts").textContent = `Column Shifts: ${columnShifts}`;
  document.getElementById("resultOutcome").textContent = `Result: ${success ? "Success" : "Failure"}`;

  // Add entry to log
  const logEntry = `Acting Value: ${actingValue}, Opposing Value: ${opposingValue}, Dice Rolls: ${rolls.join(
    ", "
  )}, Total Roll: ${total}, Column Shifts: ${columnShifts}, Result: ${success ? "Success" : "Failure"}`;
  updateLog(logEntry);
});

// Event listener for download log button
document.getElementById("downloadLog").addEventListener("click", downloadLog);
