# Methodology to Hack 2FA Authentication

## Hack Steps:

### 1. Complete Login Recording
- Perform a full, valid login using a controlled account.
- Record all data submitted to the application using an intercepting proxy tool.

### 2. Identify Login Stages
- Determine each distinct stage of the login process and the data collected at each stage.
- Note if any data is collected more than once or transmitted back to the client for resubmission (e.g., hidden form fields, cookies, preset URL parameters).

### 3. Malformed Requests
- Repeat the login process with various malformed requests:
  - Try different sequences of login steps.
  - Proceed directly to specific stages and continue from there.
  - Skip stages and proceed to the next.
  - Explore unconventional ways to access stages that developers may not have anticipated.

### 4. Test Data Submissions
- If data is submitted more than once, test submitting different values at different stages to see if the login remains successful.
- Some submissions might be superfluous or not processed by the application.
- Test if validated data at one stage is trusted subsequently:
  - Provide one user's credentials at one stage, then switch to authenticate as a different user at the next stage.
  - Test if the same piece of data is validated against different checks at different stages.

### 5. Examine Transmitted Data
- Pay attention to any data transmitted via the client that was not directly entered by the user.
- Applications may use this data to store login progress state, and trust it when submitted back to the server.
- Example: If a request for stage three includes `stage2complete=true`, try modifying these values to see if you can advance or skip stages.
