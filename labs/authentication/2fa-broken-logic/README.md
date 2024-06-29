Write-up: 2FA broken logic @ PortSwigger Academy
![Screenshot 2024-06-29 221010](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/5ddf30e4-af52-4163-8d82-b3e539b91df3)

This write-up for the lab 2FA broken logic is part of my walkthrough series for PortSwigger's Web Security Academy.
Learning path: Server-side topics → Authentication

Lab-Link: https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-broken-logic

Challenge Overview:
In this lab, we need to bypass the two-factor authentication (2FA) mechanism to access a victim's account. The steps involve logging in to the victim's account without the password and 2FA

Lab description
![Screenshot 2024-06-29 223333](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/385c24c6-3c30-40e6-88fc-f3a458d55a3b)

Steps to Solve the Challenge
1. Log in to Your Own Account:
  - Navigate to the login page.
  - Enter your username and password.
          ![Screenshot 2024-06-29 224204](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/f3dce409-17ba-408e-8d21-15a0674f391f)

  - Retrieve the 2FA code sent to your email by clicking the "Email client" button.
          ![Screenshot 2024-06-29 224351](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/d9ba76a5-2b25-4214-a8ae-6145e00b6d3a)

  - Submit the 2FA code to log in.
