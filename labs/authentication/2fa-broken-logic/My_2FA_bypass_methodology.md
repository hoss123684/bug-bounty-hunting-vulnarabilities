# Methodology to Bypass 2FA Authentication

## Hack Steps:

### 1. Complete Login Recording
- Perform a full, valid login using a controlled account.
- Record all data submitted to the application using an intercepting proxy tool.

### 2. Identify Login Stages
- Determine each distinct stage of the login process and the data collected at each stage.
- Note if any data is collected more than once or transmitted back to the client for resubmission (e.g., hidden form fields, cookies, preset URL parameters).

### 3. Token/OTP Retrieval
- **Response Inspection:** Look for tokens or OTPs returned in responses.
- **JS Files:** Check for tokens or OTPs embedded in JavaScript files.

### 4. Malformed Requests
- Repeat the login process with various malformed requests:
  - Try different sequences of login steps.
  - Proceed directly to specific stages and continue from there.
  - Skip stages and proceed to the next.
  - Explore unconventional ways to access stages that developers may not have anticipated.

### 5. Client-Side Checks
- **Manipulate Response:** Alter client-side checks from `{success: false}` to `{success: true}`.
- **Status Code:** Modify status codes to `200` before sending to the server.

### 6. Test Data Submissions
- If data is submitted more than once, test submitting different values at different stages to see if the login remains successful.
- Some submissions might be superfluous or not processed by the application.
- Test if validated data at one stage is trusted subsequently:
  - Provide one user's credentials at one stage, then switch to authenticate as a different user at the next stage.
  - Test if the same piece of data is validated against different checks at different stages.

### 7. OTP Manipulation
- **Cross-User OTP:** Use OTP generated for one user to attack another.
- **Decode OTP:** Understand the token's structure by decoding it.
- **Time-Based OTPs:** Consider time manipulation for apps using time-based tokens.
  - **Time Drift:** Manipulate system time to generate tokens valid for different time periods.
  - **Future Tokens:** Generate OTPs for future time periods to test token validity.
  - **Time-Based OTP Generation:**
    - Generate OTPs by encoding the current time.
    - Concatenate with a unique identifier like username or session ID.
    - Example: `OTP = base32(sha1(current_time + username))`

### 8. Default Credentials
- **Login Panel:** Test for default credentials in the login panel.
- **Common Defaults:** Check for commonly used default usernames and passwords.

### 9. Token Generation
- **Token Decryption:** Decrypt tokens to understand their structure.
- **Replay Attack:** Generate a token for another account after decoding.

### 10. Inclusive Techniques
- **API Testing:** Check API endpoints for 2FA handling.
- **Brute-Force:** If no lockout after failed attempts, try brute-forcing OTPs.
- **Phishing:** Test if 2FA codes are susceptible to phishing attacks.
- **OTP Leakage:** Look for ways OTPs are leaked in logs or responses.

### 11. Examine Transmitted Data
- Pay attention to any data transmitted via the client that was not directly entered by the user.
- Applications may use this data to store login progress state, and trust it when submitted back to the server.
- Example: If a request for stage three includes `stage2complete=true`, try modifying these values to see if you can advance or skip stages.
