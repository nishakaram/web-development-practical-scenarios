// ---------------------------------------------------------
// Step 1: Marks of five students stored in an array of objects.
// Each subject is out of 100.
// ---------------------------------------------------------
const students = [
  { name: "Arun",    maths: 92, science: 95, english: 88 },
  { name: "Rahul",   maths: 78, science: 70, english: 82 },
  { name: "Meena",   maths: 65, science: 58, english: 70 },
  { name: "Karthik", maths: 60, science: 32, english: 55 }, // Science below 35 -> Fail
  { name: "Divya",   maths: 55, science: 48, english: 62 }
];

const PASS_MARK = 35;         // minimum marks needed in EVERY subject
const MAX_TOTAL = 300;        // 3 subjects x 100 marks

// ---------------------------------------------------------
// Step 2: getGrade(percent) returns the grade for a percentage.
// ---------------------------------------------------------
function getGrade(percent) {
  if (percent >= 90) return "A+";
  if (percent >= 75) return "A";
  if (percent >= 60) return "B";
  if (percent >= 50) return "C";
  return "D";
}

// A student passes only if every subject mark is 35 or above.
function hasPassed(student) {
  return student.maths >= PASS_MARK &&
         student.science >= PASS_MARK &&
         student.english >= PASS_MARK;
}

// Works out total, percentage, grade and result for one student.
function calculateResult(student) {
  const total = student.maths + student.science + student.english;
  const percentage = (total / MAX_TOTAL) * 100;
  return {
    name: student.name,
    total: total,
    percentage: percentage,
    grade: getGrade(percentage),
    passed: hasPassed(student)
  };
}

// ---------------------------------------------------------
// Step 3: Build the table and summary when the button is clicked.
// ---------------------------------------------------------
function generateResults() {
  const resultBody = document.getElementById("resultBody");
  resultBody.innerHTML = ""; // clear old rows so clicking twice does not duplicate

  let topper = null;
  let percentageSum = 0;
  let passedCount = 0;

  for (let i = 0; i < students.length; i++) {
    const result = calculateResult(students[i]);

    // Create one table row
    const row = document.createElement("tr");
    if (!result.passed) {
      row.className = "fail"; // CSS turns this row red
    }
    row.innerHTML =
      "<td>" + result.name + "</td>" +
      "<td>" + result.total + "</td>" +
      "<td>" + result.percentage.toFixed(2) + "%</td>" +
      "<td>" + result.grade + "</td>" +
      "<td>" + (result.passed ? "Pass" : "Fail") + "</td>";
    resultBody.appendChild(row);

    // Collect data for the summary
    percentageSum += result.percentage;
    if (result.passed) passedCount++;
    if (topper === null || result.percentage > topper.percentage) {
      topper = result;
    }
  }

  const classAverage = percentageSum / students.length;

  document.getElementById("topperText").textContent =
    topper.name + " (" + topper.percentage.toFixed(2) + "%)";
  document.getElementById("averageText").textContent = classAverage.toFixed(2) + "%";
  document.getElementById("passedText").textContent =
    passedCount + " of " + students.length + " students";

  // Show the hidden results area
  document.getElementById("resultArea").classList.remove("hidden");
}

document.getElementById("generateBtn").addEventListener("click", generateResults);
