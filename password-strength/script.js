// Get the elements we need from the page
const passwordInput = document.getElementById("passwordInput");
const showPassword  = document.getElementById("showPassword");
const strengthBar   = document.getElementById("strengthBar");
const strengthLabel = document.getElementById("strengthLabel");

// The five rules. Each rule has a list item and a regular expression (test).
const rules = [
  { element: document.getElementById("ruleLength"), test: /.{8,}/ },          // 8 or more characters
  { element: document.getElementById("ruleUpper"),  test: /[A-Z]/ },          // uppercase letter
  { element: document.getElementById("ruleLower"),  test: /[a-z]/ },          // lowercase letter
  { element: document.getElementById("ruleNumber"), test: /[0-9]/ },          // digit
  { element: document.getElementById("ruleSymbol"), test: /[^A-Za-z0-9]/ }    // anything that is not a letter or digit
];

// Runs on every keystroke
function checkPassword() {
  const password = passwordInput.value;
  let score = 0;

  // Check each rule: green tick if satisfied, grey otherwise
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].test.test(password)) {
      rules[i].element.classList.add("valid");
      score++;
    } else {
      rules[i].element.classList.remove("valid");
    }
  }

  updateStrengthBar(score);
}

// Fills the bar and sets label text according to how many rules passed
function updateStrengthBar(score) {
  if (score === 0) {
    // Empty bar, no label
    strengthBar.style.width = "0%";
    strengthLabel.textContent = "";
  } else if (score <= 2) {
    strengthBar.style.width = (score * 20) + "%";
    strengthBar.style.background = "#d32f2f";   // red
    strengthLabel.textContent = "Weak";
    strengthLabel.style.color = "#d32f2f";
  } else if (score <= 4) {
    strengthBar.style.width = (score * 20) + "%";
    strengthBar.style.background = "#f57c00";   // orange
    strengthLabel.textContent = "Medium";
    strengthLabel.style.color = "#f57c00";
  } else {
    strengthBar.style.width = "100%";
    strengthBar.style.background = "#2e7d32";   // green
    strengthLabel.textContent = "Strong";
    strengthLabel.style.color = "#2e7d32";
  }
}

// Show Password checkbox switches the input between "password" and "text"
function togglePasswordVisibility() {
  passwordInput.type = showPassword.checked ? "text" : "password";
}

passwordInput.addEventListener("input", checkPassword);
showPassword.addEventListener("change", togglePasswordVisibility);
