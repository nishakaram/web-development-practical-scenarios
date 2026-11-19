# Web Development Practical Scenarios

Two practical scenarios built with plain HTML, CSS and Vanilla JavaScript (no frameworks).

| Scenario | Folder | What it does |
|----------|--------|--------------|
| 3 – Student Result Card | `student-result/` | Calculates total, percentage, grade and pass/fail for five students |
| 4 – Password Strength Meter | `password-strength/` | Shows live password strength while typing |

## How to run
No installation or server is needed.
1. Open the `project` folder.
2. Double-click `index.html` (the homepage) and click a card, **or** open `student-result/index.html` or `password-strength/index.html` directly.

## Project structure
```
project/
├── index.html                 Homepage with two cards
├── student-result/            Scenario 3
│   ├── index.html
│   ├── style.css
│   └── script.js
├── password-strength/         Scenario 4
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## Scenario 3 – Student Result Card
* Marks of five students are stored in an **array of objects** (`name`, `maths`, `science`, `english`).
* `getGrade(percent)`: 90+ = A+, 75+ = A, 60+ = B, 50+ = C, below 50 = D.
* Click **Generate Results** to show a table with Name, Total (/300), Percentage (2 decimals), Grade and Result.
* A student **passes only if every subject is 35 or above**. Failed students are highlighted in red (Karthik fails: Science = 32).
* Below the table: topper's name and percentage, class average percentage, and number of students passed.

Expected output with the sample data:

| Name | Total | Percentage | Grade | Result |
|------|-------|-----------|-------|--------|
| Arun | 275 | 91.67% | A+ | Pass |
| Rahul | 230 | 76.67% | A | Pass |
| Meena | 193 | 64.33% | B | Pass |
| Karthik | 147 | 49.00% | D | **Fail** |
| Divya | 165 | 55.00% | C | Pass |

Topper: Arun (91.67%) · Class average: 67.33% · Passed: 4 of 5

## Scenario 4 – Password Strength Meter
* Password box, **Show password** checkbox, strength bar, text label and a checklist of five rules.
* Rules (checked with regular expressions on every keystroke): 8+ characters, uppercase, lowercase, number, special symbol.
* Satisfied rules turn green with a tick; others stay grey.
* Strength: 0 rules = empty bar, no label; 1–2 = Weak (red); 3–4 = Medium (orange); 5 = Strong (green).
* The checkbox switches the input between `type="password"` and `type="text"`.

| Input | Result |
|-------|--------|
| (empty) | Empty bar, no label |
| `hello` | Weak |
| `Hello123` | Medium |
| `Hello@2026` | Strong |

## Concepts used (for viva)
* **Scenario 3:** arrays of objects, functions, `for` loop, `if` conditions, DOM creation (`createElement`), `toFixed(2)`, event listener.
* **Scenario 4:** `input` event, regular expressions (`.test()`), `classList.add/remove`, style changes, checkbox `change` event.
