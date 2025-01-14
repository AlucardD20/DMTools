body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.calculator {
  width: 45%;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.calculator h1 {
  color: #ffd700;
}

button {
  background-color: #ffd700;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #ffc107;
}

.results-table {
  margin: 20px;
  text-align: center;
}

table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;
}

table th, table td {
  border: 1px solid #444;
  padding: 10px;
}

table th {
  background-color: #333;
}

table td {
  text-align: center;
}
