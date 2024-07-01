# Write-up: 2FA Broken Logic @ PortSwigger Academy

![Screenshot 2024-06-29 221010](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/5ddf30e4-af52-4163-8d82-b3e539b91df3)


**Lab-Link**: [PortSwigger Lab](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-broken-logic)

## Challenge Overview:
In this lab, we need to bypass the two-factor authentication (2FA) mechanism to access a victim's account. The steps involve logging in to the victim's account without the password and 2FA.

## Lab Description:
![Screenshot 2024-06-29 223333](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/385c24c6-3c30-40e6-88fc-f3a458d55a3b)

## Steps to Solve the Challenge:

1. **Log in to Your Own Account**:
   - Navigate to the login page.
   - Enter your username and password.
     ![Screenshot 2024-06-29 224204](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/f3dce409-17ba-408e-8d21-15a0674f391f)
   - Retrieve the 2FA code sent to your email by clicking the "Email client" button.
     ![Screenshot 2024-06-29 224351](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/d9ba76a5-2b25-4214-a8ae-6145e00b6d3a)
   - Submit the 2FA code to log in.
     ![Screenshot 2024-06-30 004601](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/a49b5b07-ecb7-4f56-996b-dc494c3ca955)

2. **Analyze the Requests and Responses**:
   - Observe that the username is reflected back as a cookie in the response.
     ![Screenshot 2024-06-29 224454](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/41314462-72e4-4361-8799-d7bcbed0db59)
   - Redirected to `login2` (GET) with the cookie, it asks you to enter your MFA code received in your email.
     ![Screenshot 2024-06-29 224541](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/0f0e263e-3c74-4a75-815a-a587b0272490)

3. **Intercept the POST Request of Sending Your MFA Code**:
   - Observe that the request includes the cookie in the POST request.
     ![Screenshot 2024-06-29 224614](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/1c2cd62a-bf99-453b-87d8-7bb30a0fd639)
   - Change the cookie in every request you send.
   - After sending the GET request to `/login2` with `cookie=carlos`, change the cookie to `cookie=wiener`.
     ![Screenshot 2024-06-29 144613](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/c59a8893-0125-43a4-96e4-82acb14cb6b6)
     - A 2FA code was triggered for Carlos, even though no password was provided for his account.

4. **Brute Force the MFA Code**:
   - Use a brute force attack on submitting the MFA code.
     ![Screenshot 2024-06-29 150019](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/e745ae77-9c8e-416f-ad78-4a550afb9c1b)
   - **Attack type**: Sniper
   - **Payload**: Brute forcer, 0123456789, min length = 4, max length = 4
     ![Screenshot 2024-06-29 150109](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/0b998809-e21c-4baa-8d94-69063a5b4f5a)
   - Note that you need to use a Burp Suite collaborator.

## Conclusion:
This lab's two-factor authentication is vulnerable due to its flawed logic. By analyzing the requests and manipulating the cookies, we can trigger a 2FA code for another user and brute force the code to access their account.
