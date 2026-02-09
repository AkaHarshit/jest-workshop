# Jest Workshop Submission

## Student Details
- Name: Harshit Singh
- Roll Number: 2024-B-21082007
- GitHub Username: AkaHarshit

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. no coupon: applies only subtotal and possible bulk discount
**What it protects against:**  
Ensures that when no coupon is provided, the function returns the correct subtotal and still applies the 5% bulk discount only when the subtotal is at least 1000.

---

### 2. SAVE10 coupon: 10% off up to max 100
**What it protects against:**  
Verifies that the SAVE10 coupon always applies a 10% discount but never more than 100, even for very large subtotals, preventing over-discounting bugs.

---

### 3. FLAT50 boundary case: exactly 50 off without going below zero
**What it protects against:**  
Checks that the FLAT50 coupon subtracts 50 correctly, interacts properly with the bulk discount, and never allows the final total to go negative.

---

### 4. invalid subtotal throws error
**What it protects against:**  
Guarantees that invalid inputs such as negative numbers, NaN, or non-number values cause a clear error instead of silently producing a wrong total.

---

### 5. coupon is case-insensitive
**What it protects against:**  
Ensures that coupons work regardless of letter casing so that users typing `save10` or `flat50` still receive the correct discount, avoiding UX issues.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? (Yes / No)  
Yes, tests pass locally and the workflow is set up to run `npm test` on GitHub Actions.
- GitHub Actions Run URL:  https://github.com/AkaHarshit/jest-workshop/actions/runs/21825605329

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I understood better how to design tests to cover both normal and edge cases of discount logic, including caps and negative totals.  
I also saw how a simple GitHub Actions workflow can automatically run Jest tests on every push and pull request to prevent regressions.
