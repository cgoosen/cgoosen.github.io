---
author: chris
title: 'Passwordless security and the evolution of authentication'
slug: passwordless-security-and-the-evolution-of-authentication
date: '2020-02-13 08:00:00'
layout: post
categories:
- AzureAD
- Security
- Authentication
- Guest Posts
tags: []
comments: []
---

*__This post was originally published on the ENow Software Blog, you can view the original post [here](https://www.enowsoftware.com/solutions-engine/passwordless-security-the-evolution-of-authentication)__*

I still remember the first password I ever had; it was for my GeoCities account in the late ‘90s before they were purchased by Yahoo!. The password was a randomly generated string of six lowercase characters – that was it, no uppercase, numbers or special characters. I memorized it and thought it was great, no one would ever guess that random password – unlike the passwords my friends used, which were usually the name of their girlfriend or their nickname. By today’s standards though, it is clear that a lot has changed since then, and I’d be willing to bet that any decent authentication system would actually prevent you from using such a trivial password.

The trouble is, we have more passwords than ever before – almost everything we do today is connected to the internet in some way and requires a set of credentials. For those of us who work in technology, it comes with the territory and over time we’ve become numb to it through the use of password managers and the like. I recently helped my non-technical brother move into a new home and we had to create at least four different accounts in order to manage the smart home products that had been installed by the previous owner. You may be thinking that this all sounds like a consumer problem and many organizations have solved this problem for their end-users by making use of single sign-on (SSO) technologies and you’d be right to a certain extent. SSO doesn’t solve for human behavior though and password reuse has long been a problem. The 2019 Verizon Data Breach Investigations Report found that 80% of hacking-related breaches still involve compromised and weak credentials with 29% of all breaches involving the use of stolen credentials. A quick look at haveibeenpwned.com reveals that it currently has more than nine billion compromised passwords in its database.In 2004, Bill Gates famously predicted the demise of passwords when he said “There is no doubt that over time, people are going to rely less and less on passwords.” because “they just don't meet the challenge for anything you really want to secure." and while it may have taken 15 years for Bill’s prediction to come true, passwordless authentication is starting to become a reality.

### What is Passwordless Authentication?

Let me start by telling you what is not - passwordless authentication does not mean that all your user objects will no longer have passwords associated with them, instead it is a type of multi-factor authentication (MFA) that replaces the traditional password with something you have with something you are (biometric) or something you know (pin) provides the second factor. Microsoft currently supports three passwordless authentication options:
* Windows Hello for Business: Supported on Windows 10 devices.
* Microsoft Authenticator app: This option is especially convenient for those organizations already making use of the Authenticator app for MFA. Users can sign in on any platform or browser by getting a notification to their phone, matching a number displayed on the screen to the one on their phone, and then using their biometric or PIN to confirm.
* FIDO2 Security keys: FIDO2 Security keys are hardware keys that are standards-based and are available in many different form factors from a number of different providers. These keys are a great option for those organizations who are unable to make use of the Authenticator app on a mobile device. FIDO2 Security keys also work on any platform.

### How to get started with passwordless authentication

In this walk-through, we’ll enable passwordless authentication and configure a FIDO2 Security key for a user called John Smith. For an up to date list of supported FIDO2 Security key providers see this link.The first step required to deploy passwordless authentication is to enable the ‘Combined security information registration (preview)’ in Azure AD. To do this,
1. Sign into the Azure portal as a user administrator or global administrator.
2. Go to Azure Active Directory > User settings > Manage user feature preview settings.
3. Under Users can use preview features for registering and managing security info, you have the option of choosing to enable for a ‘Selected’ group of users which is useful for test scenarios or for ‘All‘ users.

<p><a href="/assets/img/2020/02/one.png"><img src="/assets/img/2020/02/one.png" style="width:602px;height:202px;"/></a></p>

Next, we need to enable the FIDO2 security key method:
1. Go to Azure Active Directory > Security > Authentication methods > Authentication method policy (Preview).
2. Under the FIDO2 Security Key method, select, ‘Enable’ and once again you have the option of targeting ‘All users’ or ‘Selected users’.
3. Don’t forget to Save the configuration.

<p><a href="/assets/img/2020/02/two.png"><img src="/assets/img/2020/02/two.png" style="width:601px;height:476px;"/></a></p>

The final step before being able to sign in is user registration. *__An important note here:__ If they don’t have at least one MFA method registered, they will need to add one before registering their FIDO2 Security key.* To register your FIDO2 Security key:
1. Browse to https://myprofile.microsoft.com.
2. Click Security Info.
3. Click Add method and choose Security key to add a FIDO2 Security key
4. Choose USB device or NFC device.
5. Have your key ready and choose Next.
6. A box will appear and ask the user to create a PIN and perform the required gesture for the key, either biometric or touch.
7. Finally, the user will be asked to provide a meaningful name for the key so it can easily be identified if they have multiple. Click Next.
8. Click Done to complete the process.

<p><a href="/assets/img/2020/02/three.png"><img src="/assets/img/2020/02/three.png" style="width:600px;height:355px;"/></a></p>

Once user registration has been completed, the sign in process is really simple – instead of entering a password you can select the ‘Sign in with a security key’ option as shown in the brief demo below:

<p><iframe src="https://player.vimeo.com/video/389262718" width="640" height="527" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></p>

As you can see from the walk-through above, getting started with passwordless authentication in Azure AD is really simple, however, it should go without saying that doing this in a large organization would require careful planning and thought.

References: https://enterprise.verizon.com/resources/reports/dbir/
