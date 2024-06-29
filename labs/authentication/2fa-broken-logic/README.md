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

  - Submit the 2FA code to log in, you logged in to your account
  - ![Screenshot 2024-06-30 004601](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/a49b5b07-ecb7-4f56-996b-dc494c3ca955)


Let's analyze the requests and responses:
    ![Screenshot 2024-06-29 224454](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/41314462-72e4-4361-8799-d7bcbed0db59)
I see that the username is reflected back as a cookie in response

Redirected to login2(Get) with the cookie, it ask you to enter your mfa-code that you recieved in your email
        ![Screenshot 2024-06-29 224541](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/0f0e263e-3c74-4a75-815a-a587b0272490)
  
Now let's intercept the POST request of sending your mfa-code:
![Screenshot 2024-06-29 224614](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/1c2cd62a-bf99-453b-87d8-7bb30a0fd639)

I see that the request include the cookie in the POST request, the next step i will change the cookie in every requst i sent.
somthing interesting happens here ,after sending the GET request to /login2 with cookie = carlos beyond to cookie = wiener :
![Screenshot 2024-06-29 144613](https://github.com/hoss123684/bug-bounty-hunting-vulnarabilities/assets/80020673/c59a8893-0125-43a4-96e4-82acb14cb6b6)

